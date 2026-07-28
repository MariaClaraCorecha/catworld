import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../core/services/auth';
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
    catName: [''],
    birthDate: [''],
    bio: [''],
    city: [''],
    catColor: [''],
    catAge: [''],
    catFur: [''],
    catBreed: [''],
    catGender: [''],
  });

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
      return;
    }

    const user = this.authService.user();
    this.form.patchValue({
      catName: user?.catName ?? '',
      birthDate: user?.birthDate ?? '',
      bio: user?.bio ?? '',
      city: user?.city ?? '',
      catColor: user?.catColor ?? '',
      catAge: user?.catAge ?? '',
      catFur: user?.catFur ?? '',
      catBreed: user?.catBreed ?? '',
      catGender: user?.catGender ?? '',
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  save() {
    const { catName, birthDate, bio, city, catColor, catAge, catFur, catBreed, catGender } =
      this.form.value;
    this.authService.updateProfile({
      catName: catName ?? '',
      birthDate: birthDate ?? '',
      bio: bio ?? '',
      city: city ?? '',
      catColor: catColor ?? '',
      catAge: catAge ?? '',
      catFur: catFur ?? '',
      catBreed: catBreed ?? '',
      catGender: catGender ?? '',
    });
    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
