import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';

interface Member {
  id: number;
  displayName: string;
  email: string;
}

const getMembers = () => `https://localhost:5001/api/members`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = 'Dating App Mock';
  protected readonly members = httpResource<Member[]>(getMembers);
}
