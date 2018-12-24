import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service'

@Component({
    template: `
    <a *ngFor="let project of projectNames; index as i"
        routerLink="/projects/{{i}}">{{projectNames[i]}}
    </a>
    `,
    styles: [
        `a {
            color: #555;
            text-decoration: none;
            margin: 15px;
            padding: 2px;
            border-left: 2px solid white;
            display: inline-block;
        }
        a:hover { border-left: 2px solid hsl(var(--hue_0), var(--sat_0), var(--brt_0)); }
    `]
})
export class ProjectsPage implements OnInit {

    public projectNames: string[];

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.projectNames = this.service.getAllProjectNames();
    }
}
