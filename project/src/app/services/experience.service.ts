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
            'Developed and documented user facing features in Python, C#, and C++',
            'Participated in the full development lifecycle using Scaled Agile methodologies',
            'Designed and implamented automated test workflows to test pre production code'
        ]
    },
    {
        title: 'Programming Intern',
        company: 'Interactive Degree Planner LLC',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Designed, implemented, and tested complex algorithms in C++',
            'Worked with object orient design principles including multiple inheritance, encapsulation, and polymorphism',
            'Optimized and updated old code to comply with new specifications',
            'Participated in weekly team meetings to present progress'
        ]
    },
    {
        title: 'Game Developement Intern',
        company: 'Mobile Mesh Games',
        location: 'Whitewater WI',
        timeframe: 'May \'18 - Dec \'18',
        skills: [
            'Developed, tested, and debugged C# code for mobile apps',
            'Programmed menu navigation and control logic for multiple iPhone and Android games',
            'Consulted with graphic design interns to design and implement user interface elements'
        ]
    },
    {
        title: 'Lab Technician',
        company: 'UWW Arts Media Center',
        location: 'Whitewater WI',
        timeframe: 'Sept \'16 - May \'18',
        skills: [
            'Cleaned, maintained, and operated 3D printer, laser cutter, and other machinery', 
            'Taught and consulted dozens of students and professors how to use the equipment', 
            'Consulted students on the manufacturing process of their projects', 
            'Wrote Javascript plugins for Adobe Illustrator to design fractal patterns for g-code generation', 
            'Designed 3D printable models for students and professors using Autodesk 3D Studio Max and Maya software packages'
        ]
    }
]