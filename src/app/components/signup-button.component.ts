import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  standalone: true,
  template: `
    <button (click)="signup()" class="button login" aria-label="Sign up">
      <span class="button-glow" aria-hidden="true"></span>
      <span class="button-label">Sign up</span>
    </button>
  `,
})
export class SignupButtonComponent {
  private auth = inject(AuthService);

  signup(): void {
    this.auth
      .loginWithRedirect({
        authorizationParams: {
          screen_hint: 'signup',
        },
      })
      .subscribe();
  }
}
