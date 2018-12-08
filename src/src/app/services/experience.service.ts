import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface IExperience {
    title: string;
    company: string;
    location: string;
    timeframe: string;
    skills: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {

    constructor(private http: HttpClient) { }

    getExperiences(): IExperience[] { return EXPERIENCE; }
}

export const EXPERIENCE: IExperience[] = [
    {
        title: 'Software engineering co-op',
        company: 'Rockwell Automation',
        location: 'Milwaukee WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Automated Testing',
            'c++ front end developement'
        ]
    },
    {
        title: 'Programming intern',
        company: 'Interactive Degree Planner LLC',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Designed and implemented algorithms'
        ]
    },
    {
        title: 'Game developement intern',
        company: 'Mobile Mesh Games',
        location: 'Whitewarer WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Mobile app developement',
            'IMplamented art assets'
        ]
    }
]
