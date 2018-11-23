import { Component, OnInit, Input } from '@angular/core';

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

    constructor() { }

    ngOnInit(): void { }

    @Input() links: NavLink[]
}
