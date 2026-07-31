import { Injectable } from '@angular/core';
import { Cat } from './auth';

export type ReminderKey = 'deworming' | 'vaccine' | 'checkup' | 'neutering';
export type ReminderUrgency = 'unknown' | 'ok' | 'soon' | 'overdue' | 'suggested';

export interface CareReminder {
  key: ReminderKey;
  label: string;
  icon: string;
  urgency: ReminderUrgency;
  detail: string;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const DEWORMING_INTERVAL_DAYS = 90;
const VACCINE_INTERVAL_DAYS = 365;
const CHECKUP_INTERVAL_DAYS = 365;
const SENIOR_CHECKUP_INTERVAL_DAYS = 180;
const SENIOR_AGE_YEARS = 7;
const SOON_THRESHOLD_DAYS = 14;

@Injectable({ providedIn: 'root' })
export class CareRemindersService {
  getReminders(cat: Cat): CareReminder[] {
    const ageYears = cat.age ? Number(cat.age) : null;
    const checkupInterval =
      ageYears !== null && ageYears >= SENIOR_AGE_YEARS ? SENIOR_CHECKUP_INTERVAL_DAYS : CHECKUP_INTERVAL_DAYS;

    const reminders: CareReminder[] = [
      this.buildRecurring('deworming', 'Vermifugação', 'medication', cat.lastDeworming, DEWORMING_INTERVAL_DAYS),
      this.buildRecurring('vaccine', 'Reforço de vacina', 'vaccines', cat.lastVaccine, VACCINE_INTERVAL_DAYS),
      this.buildRecurring('checkup', 'Check-up veterinário', 'local_hospital', cat.lastCheckup, checkupInterval),
    ];

    if (!cat.neutered) {
      reminders.push({
        key: 'neutering',
        label: 'Castração',
        icon: 'health_and_safety',
        urgency: 'suggested',
        detail: 'Converse com o veterinário sobre a castração.',
      });
    }

    return reminders;
  }

  hasUrgentReminder(cats: Cat[]): boolean {
    return cats.some((cat) =>
      this.getReminders(cat).some((r) => r.urgency === 'overdue' || r.urgency === 'soon'),
    );
  }

  private buildRecurring(
    key: ReminderKey,
    label: string,
    icon: string,
    lastDateStr: string | undefined,
    intervalDays: number,
  ): CareReminder {
    if (!lastDateStr) {
      return { key, label, icon, urgency: 'unknown', detail: 'Nunca registrado' };
    }

    const lastDate = new Date(`${lastDateStr}T00:00:00`);
    const dueDate = new Date(lastDate.getTime() + intervalDays * DAY_MS);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.round((dueDate.getTime() - today.getTime()) / DAY_MS);

    if (diffDays < 0) {
      return { key, label, icon, urgency: 'overdue', detail: `Atrasado há ${Math.abs(diffDays)} dia(s)` };
    }
    if (diffDays <= SOON_THRESHOLD_DAYS) {
      return {
        key,
        label,
        icon,
        urgency: 'soon',
        detail: diffDays === 0 ? 'Vence hoje' : `Vence em ${diffDays} dia(s)`,
      };
    }
    return { key, label, icon, urgency: 'ok', detail: `Próximo em ${diffDays} dia(s)` };
  }
}
