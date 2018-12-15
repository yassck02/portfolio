import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service'

@Component({
    template: `
    <a *ngFor="let project of projectNames; index as i"
        routerLink="/projects/{{i}}">{{projectNames[i]}},
    </a>
    `,
    styles: [
        `a {
            color: #555;
            text-decoration: none;
            margin-left: 6px;
            padding-left: 2px;
            border-left: 2px solid white;
        }
        a:hover { border-left: 2px solid hsl(var(--hue_1), 100%, 50%); }
    `]
})
export class ProjectsPage implements OnInit {

    public projectNames: string[];

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.projectNames = this.service.getAllProjectNames();
    }
}
