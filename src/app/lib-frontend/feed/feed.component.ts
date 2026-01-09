import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-feed',
  standalone: true,
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  protected auth = inject(AuthService);
}
