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
        title: 'Software Engineering co-op',
        company: 'Rockwell Automation',
        location: 'Milwaukee WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Automated Testing',
            'c++ front end developement'
        ]
    },
    {
        title: 'Programming Intern',
        company: 'Interactive Degree Planner LLC',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Designed and implemented algorithms'
        ]
    },
    {
        title: 'Game Developement Intern',
        company: 'Mobile Mesh Games',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Mobile app developement',
            'Implamented art assets'
        ]
    },
    {
        title: 'Lab Technician',
        company: 'UWW Arts Media Center',
        location: 'Whitewater WI',
        timeframe: 'Sept \'16 - May \'18',
        skills: [
            'Operated and maintained a 3D printer and Laser cutter',
            'Taught students and professors how to use them'
        ]
    }
]
