import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  authService = inject(AuthService);

  saved = false;

  form = this.fb.group({
    catName: [''],
    birthDate: [''],
    bio: [''],
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
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  save() {
    const { catName, birthDate, bio } = this.form.value;
    this.authService.updateProfile({
      catName: catName ?? '',
      birthDate: birthDate ?? '',
      bio: bio ?? '',
    });
    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
