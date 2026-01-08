import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../../components/login-button.component';
import { LogoutButtonComponent } from '../../components/logout-button.component';
import { ProfileComponent } from '../../components/profile.component';

@Component({
  selector: 'app-start',
  imports: [CommonModule, LoginButtonComponent, LogoutButtonComponent, ProfileComponent],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  protected auth = inject(AuthService);
}
