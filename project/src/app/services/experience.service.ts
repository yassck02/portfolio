import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ElementSchemaRegistry } from '@angular/compiler';

export interface IExperienceItem {
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

    getExperiences(): Observable<IExperienceItem[]> {
        return this.http.get<IExperienceItem[]>('../../assets/experiences.json')
    }
}
