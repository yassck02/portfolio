import { Component } from '@angular/core';

import { ExperienceService, IExperienceItem } from '../../services/experience.service';

@Component({
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.css'],
})
export class ExperiencePage {

    public experiences: IExperienceItem[];

    constructor(private service: ExperienceService) { }

    ngOnInit() {
        this.service.getExperiences().subscribe((data) => {
            this.experiences = data
        })
    }
}
