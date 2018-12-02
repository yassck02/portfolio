import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface IProject {
    title: string;
    subtitle: string;
    repoUrl: string;
    images: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

    private _profile_url: string = "https://raw.githubusercontent.com/yassck02";
    private _manifest_filename: string = "manifest.json";

    getProject(id: number):Observable<IProject> {
        var url = this._profile_url + "/" + PROJECT_REFS[id] + "/master/" + this._manifest_filename;
        return this.http.get<IProject>( url );
    }

    constructor(private http: HttpClient) { }

    getProjectRefs(): string[] {
        return PROJECT_REFS;
    }

}

export const PROJECT_REFS: string[] = [
    "_Chaos",
    "Mandelbrot-Set",
    "Spirographer",
    "Math-Art"
]
