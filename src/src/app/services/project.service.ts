import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

    private _api_endpoint: string = "https://api.github.com/repos/yassck02/";

    getProject(id: number):Observable<html> {
        let head = new HttpHeaders({
            'Accept': 'application/vnd.github.v3.html',
         })
         // ex: curl -H "Accept: application/vnd.github.v3.html" https://api.github.com/repos/yassck02/Spirographer/readme
        let url = this._api_endpoint + PROJECT_REFS[id] + "/readme";
        console.log(url);
        return this.http.get(url, { headers: head, responseType: 'text'});
    }

    constructor(private http: HttpClient) { }

    getProjectRefs(): string[] { return PROJECT_REFS; }
}

export const PROJECT_REFS: string[] = [
    "_Chaos",
    "Mandelbrot-Set",
    "Spirographer",
    "Math-Art",
    "L-System-Viewer",
    "ASCII-Maze-Generator"
]
