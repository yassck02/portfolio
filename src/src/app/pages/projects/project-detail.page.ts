import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../services/project.service'

@Component({
    template: `
        <a id="btn-back" routerLink="/projects">< Back</a>
        <a id="repo-link" href="{{repo_link}}">Repository</a>
        <div *ngIf="readme === undefined">
            <p>Loading...</p>
        </div>
        <div *ngIf="readme !== undefined">
            <div [innerHTML]="readme"></div>
        </div>
    `,
    styles: [`
        #repo-link { 
            float: right;
            display: inline-block;
            color: gray;
            text-decoration: underline;
        }
        #repo-link:hover { 
            color: hsl(var(--hue_1), 100%, 50%);
        }
        #btn-back {
            display: inline-block;
            color: gray;
            text-decoration: none;
            border: solid 1px white;
            border-radius: var(--radius);
            padding: 2px;
        }
        #btn-back:hover {
            border-color: hsl(var(--hue_0), 100%, 50%);
        }
    `]
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
