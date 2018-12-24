import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { '(document:keyup)': 'onKeyPressed($event)' }
})
export class AppComponent implements OnInit {

  tabs: any[] = [
      { index: 0, path: '/home',       label: 'About'      },
      { index: 1, path: '/experience', label: 'Experience' },
      { index: 2, path: '/projects',   label: 'Projects'   },
      { index: 3, path: '/contact',    label: 'Contact'    },
      { index: 4, path: '/resume',     label: 'Résumé'     },
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
          this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
          this.renderer.setStyle(this.element.nativeElement, '--hue_1', '50');
          console.log("DFEEFEFEFEF");
      }
  }

  constructor(private router: Router, private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      //document.documentElement.style.setProperty('--hue-0', '50');
      //document.documentElement.style.setProperty('--hue-1', '50');

      //this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
      this.renderer.setProperty(this.element.nativeElement, 'hue_1', '100');
  }
}
