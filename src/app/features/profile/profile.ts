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

  save() {
    const { birthDate, bio, city } = this.form.value;
    this.authService.updateProfile({
      birthDate: birthDate ?? '',
      bio: bio ?? '',
      city: city ?? '',
      cats: this.cats.value,
    });
    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
