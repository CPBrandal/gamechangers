import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../../components/login-button.component';
import { LogoutButtonComponent } from '../../components/logout-button.component';

@Component({
  selector: 'app-start',
  imports: [CommonModule, LoginButtonComponent, LogoutButtonComponent],
  templateUrl: './start.html',
})
export class Start {
  protected auth = inject(AuthService);
}
