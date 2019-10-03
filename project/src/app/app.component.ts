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

  constructor(private router: Router, private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      this.renderer.setProperty(this.element.nativeElement, 'hue_1', '100');
  }
}