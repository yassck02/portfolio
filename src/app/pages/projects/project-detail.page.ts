import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService, IProject } from '../../services/project.service'

@Component({
    templateUrl: './project-detail.page.html',
    styleUrls: ['./project-detail.page.css']
})
export class ProjectDetailPage implements OnInit {

    project: IProject;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.service.getProject(parseInt(id, 10))
            .subscribe( (data: IProject) => {
                this.project = data;
            });
    }

}