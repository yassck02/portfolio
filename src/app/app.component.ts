import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { '(document:keyup)': 'onKeyPressed($event)' }
})
export class AppComponent {

  tabs: any[] = [
      { path: '/home',     label: 'Home'     },
      { path: '/projects', label: 'Projects' },
  ];

  currentTab: number = 0;

  onLeftClicked() {
      this.currentTab = (this.currentTab-1 >= 0) ? this.currentTab-1 : this.tabs.length-1;
      this.router.navigate([this.tabs[this.currentTab].path]);
  }

  onRightClicked() {
      this.currentTab = (this.currentTab+1 < this.tabs.length) ? this.currentTab+1 : 0;
      this.router.navigate([this.tabs[this.currentTab].path]);
  }

  onKeyPressed(event: KeyboardEvent) {
      if(event.key == "ArrowLeft") {
          this.onLeftClicked();
      } else if(event.key == "ArrowRight") {
          this.onRightClicked();
      }
      console.log(event.key)
  }

  constructor(private router: Router){}
}
