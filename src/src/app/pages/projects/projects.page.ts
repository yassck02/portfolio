import { Component, OnInit } from '@angular/core';

import { ProjectService, IProject } from '../../services/project.service'

@Component({
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.css']
})
export class ProjectsPage implements OnInit {

    public projects: string[];

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.projects = this.service.getProjectRefs();
    }
}
