import { Injectable } from '@angular/core';

export interface Feedback {
  id: string;
  type: 'reclamacao' | 'melhoria';
  message: string;
  name?: string;
  email?: string;
  createdAt: string;
}

const STORAGE_KEY = 'catworld_feedback';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  getAll(): Feedback[] {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  }

  add(feedback: Omit<Feedback, 'id' | 'createdAt'>) {
    const all = this.getAll();
    all.push({
      ...feedback,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }
}
