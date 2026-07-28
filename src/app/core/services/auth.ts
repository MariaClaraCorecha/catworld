import { Injectable, signal } from '@angular/core';

export interface CatUser {
  name: string;
  email: string;
  photoUrl: string;
  token: string;
  bio?: string;
  birthDate?: string;
  catName?: string;
}


declare const google: any;

@Injectable({ providedIn: 'root' })
export class AuthService {

  user = signal<CatUser | null>(null);
  isLoggedIn = signal(false);
  loginError = signal<string | null>(null);


  private clientId = '265699889102-0ae236l9u8500a4qnicr19sp0t9l8blq.apps.googleusercontent.com';

  initialize(buttonElement: HTMLElement) {
    this.loginError.set(null);

    this.waitForGoogleScript()
      .then(() => {
        google.accounts.id.initialize({
          client_id: this.clientId,
          callback: (response: any) => this.handleCredential(response),
          use_fedcm_for_prompt: true,
          error_callback: (error: any) => {
            console.error('Google login failed', error);
            this.loginError.set('Não foi possível entrar com o Google. Tente novamente.');
          },
        });

        google.accounts.id.renderButton(buttonElement, {
          theme: 'outline',
          size: 'medium',
          shape: 'pill',
          text: 'signin_with',
          locale: 'pt-BR',
        });

        google.accounts.id.prompt();
      })
      .catch(() => {
        console.error('Google Identity Services script did not load in time');
        this.loginError.set(
          'Não foi possível carregar o login do Google. Verifique sua conexão ou desative bloqueadores de anúncio.',
        );
      });
  }

  private waitForGoogleScript(timeoutMs = 5000): Promise<void> {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const check = () => {
        if (typeof google !== 'undefined' && google?.accounts?.id) {
          resolve();
        } else if (Date.now() - start > timeoutMs) {
          reject();
        } else {
          setTimeout(check, 50);
        }
      };
      check();
    });
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

  updateProfile(fields: Partial<Pick<CatUser, 'bio' | 'birthDate' | 'catName'>>) {
    const current = this.user();
    if (!current) return;

    const updated = { ...current, ...fields };
    this.user.set(updated);
    localStorage.setItem('catworld_user', JSON.stringify(updated));
  }

  logout() {
    if (typeof google !== 'undefined' && google?.accounts?.id) {
      google.accounts.id.disableAutoSelect();
    }
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