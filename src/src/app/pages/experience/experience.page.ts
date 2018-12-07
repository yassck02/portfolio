import { Component } from '@angular/core';

import { ExperienceService, IExperience } from '../../services/experience.service';

@Component({
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.css'],
})
export class ExperiencePage {

    public experiences: IExperience[];

    constructor(private service: ExperienceService) { }

    ngOnInit() {
        this.experiences = this.service.getExperiences();
    }
}
