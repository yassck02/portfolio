import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../services/project.service'

@Component({
    template: `
        <div *ngIf="readme === undefined">
            <p>Loading...</p>
        </div>
        <div *ngIf="readme !== undefined">
            <div [innerHTML]="readme"></div>
            <a href="{{repo_link}}">repository</a>
        </div>
    `,
    styleUrls: []
})
export class ProjectDetailPage implements OnInit {

    readme: string;
    project_name: string;
    repo_link: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService
    ) { }

    ngOnInit() {
        let _id = this.route.snapshot.paramMap.get('id');
        let id = parseInt(_id, 10)
        this.project_name = this.service.getProjectName(id);
        this.repo_link = this.service.getProjectRepoLink(id);
        this.service.getProjectReadme(id).subscribe( (data: any) => { this.readme = data; });
    }
}
