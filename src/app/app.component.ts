import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Users from './users.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public users: Users[] = [
    {
      firstName: "Zehavi",
      lastName: "Fainman",
      isLikeAngular: true,
    }
  ];
}
