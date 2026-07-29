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

const FEEDBACK_EMAIL = 'mariaclaracorecha5@gmail.com';

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
  private authService = inject(AuthService);

  sent = false;

  typeOptions = [
    { value: 'reclamacao', label: 'Reclamação' },
    { value: 'melhoria', label: 'Sugestão de melhoria' },
  ];

  form = this.fb.group({
    type: ['melhoria', Validators.required],
    name: [this.authService.user()?.name ?? ''],
    email: [this.authService.user()?.email ?? '', Validators.email],
    message: ['', Validators.required],
  });

  goHome() {
    this.router.navigate(['/']);
  }

  submit() {
    if (this.form.invalid) return;

    const { type, name, email, message } = this.form.value;
    const typeLabel = this.typeOptions.find((o) => o.value === type)?.label ?? 'Feedback';

    const subject = `[CatWorld] ${typeLabel}`;
    const bodyLines = [
      name ? `Nome: ${name}` : null,
      email ? `E-mail para resposta: ${email}` : null,
      '',
      message,
    ].filter((line) => line !== null);

    const mailtoUrl =
      `mailto:${FEEDBACK_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;
    this.sent = true;
  }

  sendAnother() {
    this.sent = false;
    this.form.patchValue({ type: 'melhoria', message: '' });
  }
}
