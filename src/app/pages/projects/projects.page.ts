import { Component, OnInit } from '@angular/core';

import { ProjectService, IProject } from '../../services/project.service'

@Component({
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.css']
})
export class ProjectsPage implements OnInit {

    public project: IProject;

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.service.getProject(0)
            .subscribe( (data: IProject) => {
                this.project = data
                console.log(data)
            });
    }
}
