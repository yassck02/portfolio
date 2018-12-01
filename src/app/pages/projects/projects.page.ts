import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../services/project.service'

@Component({
    selector: 'page-projects',
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.css']
})
export class ProjectsPage implements OnInit {

    constructor(private service: ProjectService) { }

    ngOnInit(): void { }

}
