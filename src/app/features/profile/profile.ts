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
  authService = inject(AuthService);

  saved = false;

  furOptions = ['Curta', 'Longa', 'Semi longa', 'Sem pelo'];

  form = this.fb.group({
    catName: [''],
    birthDate: [''],
    bio: [''],
    catColor: [''],
    catAge: [''],
    catFur: [''],
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
      catColor: user?.catColor ?? '',
      catAge: user?.catAge ?? '',
      catFur: user?.catFur ?? '',
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  save() {
    const { catName, birthDate, bio, catColor, catAge, catFur } = this.form.value;
    this.authService.updateProfile({
      catName: catName ?? '',
      birthDate: birthDate ?? '',
      bio: bio ?? '',
      catColor: catColor ?? '',
      catAge: catAge ?? '',
      catFur: catFur ?? '',
    });
    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
