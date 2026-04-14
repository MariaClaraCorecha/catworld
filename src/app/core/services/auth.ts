import { Injectable, signal } from '@angular/core';

export interface CatUser {
  name: string;
  email: string;
  photoUrl: string;
  token: string;
}


declare const google: any;

@Injectable({ providedIn: 'root' })
export class AuthService {

  user = signal<CatUser | null>(null);
  isLoggedIn = signal(false);

 
  private clientId = 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com';

  initialize(buttonElement: HTMLElement) {
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: (response: any) => this.handleCredential(response),
    });

   
    google.accounts.id.renderButton(buttonElement, {
      theme: 'outline',
      size: 'medium',
      shape: 'pill',
      text: 'signin_with',
      locale: 'pt-BR',
    });

    
    google.accounts.id.prompt();
  }

  private handleCredential(response: any) {
    
    const payload = this.decodeJwt(response.credential);

    this.user.set({
      name: payload.name,
      email: payload.email,
      photoUrl: payload.picture,
      token: response.credential,
    });

    this.isLoggedIn.set(true);

    
    localStorage.setItem('catworld_user', JSON.stringify(this.user()));
  }

  private decodeJwt(token: string): any {
    const base64 = token.split('.')[1];
    const json = atob(base64.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(json);
  }

  logout() {
    google.accounts.id.disableAutoSelect();
    this.user.set(null);
    this.isLoggedIn.set(false);
    localStorage.removeItem('catworld_user');
  }

 
  restoreSession() {
    const saved = localStorage.getItem('catworld_user');
    if (saved) {
      const parsed = JSON.parse(saved);
      this.user.set(parsed);
      this.isLoggedIn.set(true);
    }
  }
}