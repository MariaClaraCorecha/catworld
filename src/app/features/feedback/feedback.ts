import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../core/services/auth';
import { FeedbackService } from '../../core/services/feedback';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class FeedbackComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private feedbackService = inject(FeedbackService);
  private authService = inject(AuthService);

  submitted = false;

  typeOptions = [
    { value: 'reclamacao', label: 'Reclamação' },
    { value: 'melhoria', label: 'Sugestão de melhoria' },
  ];

  form = this.fb.group({
    type: ['melhoria', Validators.required],
    message: ['', Validators.required],
  });

  goHome() {
    this.router.navigate(['/']);
  }

  submit() {
    if (this.form.invalid) return;

    const { type, message } = this.form.value;
    const user = this.authService.user();

    this.feedbackService.add({
      type: type as 'reclamacao' | 'melhoria',
      message: message ?? '',
      name: user?.name,
      email: user?.email,
    });

    this.submitted = true;
    this.form.reset({ type: 'melhoria', message: '' });
  }

  sendAnother() {
    this.submitted = false;
  }
}
