import { Injectable } from '@angular/core';

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    imageUrls: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
      return PROJECTS;
  }

  getProject(id: number): Project {
      return PROJECTS[id];
  }
}


const PROJECTS: Project[] = [
    {
        title: 'Project 001',
        subtitle: 'My first personal project',
        description: 'A simple project to showcase my skills',
        imageUrls: []
    },
]
