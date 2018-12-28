import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../../services/project.service'

@Component({
    templateUrl: './project-detail.page.html',
    styleUrls: ['./project-detail.page.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailPage implements OnInit {

    repoLink: string;
    readme: string;

    constructor(
        private route: ActivatedRoute,
        private service: ProjectService
    ) { }

    ngOnInit() {
        let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.repoLink = this.service.getRepoLink(id);
        this.service.getReadme(id).subscribe( (data: string) => { 
            this.readme = data;
        });
    }
}
