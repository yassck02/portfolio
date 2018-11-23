import { Component } from '@angular/core';

import { NavLink } from './elements/navbar/navbar.element'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Connor Yass\' Portfolio';
  navLinks: NavLink[] = [
      { path: '/home', label: 'Home' },
      { path: '/projects', label: 'Projects' },
  ];
}
