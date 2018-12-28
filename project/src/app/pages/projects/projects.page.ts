import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service'

@Component({
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.css']
})
export class ProjectsPage implements OnInit {

    public projectNames: string[];

    constructor(private service: ProjectService) { }

    ngOnInit() {
        this.service.getProjectNames().subscribe( (data) => {
                this.projectNames = data;
            }
        )
    }
}
