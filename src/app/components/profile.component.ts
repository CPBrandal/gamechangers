import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (auth.isLoading$ | async) {
      <div class="loading-text">Loading profile...</div>
    }

    @if ((auth.isAuthenticated$ | async) && (auth.user$ | async); as user) {
      <div class="profile">
        @if (user.picture) {
          <img
            [src]="user.picture"
            [alt]="user.name || 'User'"
            class="profile-picture"
            width="112"
            height="112"
          />
        }

        <div class="profile-text">
          <div class="profile-name">{{ user.name }}</div>
          <div class="profile-email">{{ user.email }}</div>
        </div>
      </div>
    }
  `,
})
export class ProfileComponent {
  protected auth = inject(AuthService);
}


