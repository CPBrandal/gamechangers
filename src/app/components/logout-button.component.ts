import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  template: `
    <button (click)="logout()" class="button logout">
      <span class="button-label">Log out</span>
    </button>
  `,
})
export class LogoutButtonComponent {
  private auth = inject(AuthService);

  logout(): void {
    this.auth
      .logout({
        logoutParams: {
          // Must be an absolute URL and must be whitelisted in Auth0 "Allowed Logout URLs".
          // Use the origin (no path) so it's easy to whitelist and still returns to your default route ('').
          returnTo: window.location.origin,
        },
      })
      .subscribe();
  }
}
