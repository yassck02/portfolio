import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener. Input } from '@angular/core';

export interface NavLink {
    label: string;
    path: string;
}

@Component({
    selector: 'cy-navbar',
    templateUrl: './navbar.element.html',
    styleUrls: ['./navbar.element.css']
})
export class NavBarElement implements OnInit {

    @ViewChild('stickyMenu') menuElement: ElementRef;
    elementPosition: any;

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.elementPosition = this.menuElement.nativeElement.getBoundingClientRect().top;;
    }

    @Input() links: NavLink[]

    stuck: boolean = false;

    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.elementPosition){
            this.stuck = true;
        } else {
            this.stuck = false;
        }
    }
}
