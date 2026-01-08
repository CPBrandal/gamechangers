import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  standalone: true,
  template: `
    <button (click)="loginWithRedirect()" class="button login">
      <span class="button-glow" aria-hidden="true"></span>
      <span class="button-label">Log in</span>
    </button>
  `,
})
export class LoginButtonComponent {
  private auth = inject(AuthService);

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}


