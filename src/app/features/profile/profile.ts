import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthService, Cat } from '../../core/services/auth';
import { BreedsService } from '../../core/services/breeds';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private breedsService = inject(BreedsService);
  authService = inject(AuthService);

  saved = false;
  avatarError = false;
  editing = false;

  furOptions = ['Curta', 'Longa', 'Semi longa', 'Sem pelo'];
  genderOptions = ['Macho', 'Fêmea'];
  breedOptions = [
    ...this.breedsService.getAll().map((b) => b.name),
    'Sem raça definida (SRD)',
    'Outra',
  ];

  form = this.fb.group({
    birthDate: [''],
    bio: [''],
    city: [''],
    cats: this.fb.array<FormGroup>([]),
  });

  get cats() {
    return this.form.get('cats') as FormArray<FormGroup>;
  }

  private newCatGroup(cat?: Cat) {
    return this.fb.group({
      name: [cat?.name ?? ''],
      breed: [cat?.breed ?? ''],
      gender: [cat?.gender ?? ''],
      color: [cat?.color ?? ''],
      age: [cat?.age ?? ''],
      fur: [cat?.fur ?? ''],
    });
  }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return;
    }

    const user = this.authService.user();
    this.form.patchValue({
      birthDate: user?.birthDate ?? '',
      bio: user?.bio ?? '',
      city: user?.city ?? '',
    });

    const existingCats = user?.cats?.length ? user.cats : [{}];
    existingCats.forEach((cat) => this.cats.push(this.newCatGroup(cat)));

    this.editing = !this.hasProfileData;
  }

  get hasProfileData(): boolean {
    const user = this.authService.user();
    return !!(user?.bio || user?.city || user?.birthDate || user?.cats?.some((cat) => cat.name));
  }

  get filledCats(): Cat[] {
    return (this.authService.user()?.cats ?? []).filter((cat) => cat.name);
  }

  breedImage(breedName?: string): string | undefined {
    if (!breedName) return undefined;
    return this.breedsService.getAll().find((b) => b.name === breedName)?.image;
  }

  formattedBirthDate(dateStr?: string): string {
    if (!dateStr) return '';
    const date = new Date(`${dateStr}T00:00:00`);
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
  }

  age(dateStr?: string): number | null {
    if (!dateStr) return null;
    const birth = new Date(`${dateStr}T00:00:00`);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const beforeBirthday =
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
    if (beforeBirthday) age--;
    return age;
  }

  addCat() {
    this.cats.push(this.newCatGroup());
  }

  removeCat(index: number) {
    this.cats.removeAt(index);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  startEditing() {
    this.editing = true;
  }

  cancelEdit() {
    if (this.hasProfileData) this.editing = false;
  }

  save() {
    const { birthDate, bio, city } = this.form.value;
    this.authService.updateProfile({
      birthDate: birthDate ?? '',
      bio: bio ?? '',
      city: city ?? '',
      cats: this.cats.value,
    });
    this.saved = true;
    this.editing = false;
    setTimeout(() => (this.saved = false), 2000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
