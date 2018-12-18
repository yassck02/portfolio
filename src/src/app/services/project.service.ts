import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

    PROJECT_REFS: string[];

    // ex: curl -H "Accept: application/vnd.github.v3.html" https://api.github.com/repos/yassck02/Spirographer/readme
    private _github_base: string = "https://github.com";
    private _api_endpoint: string = "https://api.github.com/repos";
    private _username: string = "yassck02";

    constructor(private http: HttpClient) {
        this.http.get('../../assets/projects.txt', { responseType: 'text' }).subscribe(data => {
            this.PROJECT_REFS = data.split("\n");
        })
    }

    getProjectReadme(id: number):Observable<any> {
        let head = new HttpHeaders({
            'Accept': 'application/vnd.github.v3.html',
         })
        let url = this._api_endpoint + "/" + this._username + "/" + this.PROJECT_REFS[id] + "/readme";
        return this.http.get(url, { headers: head, responseType: 'text'});
    }

    getProjectName(id: number): string {
        return this.PROJECT_REFS[id];
    }

    getProjectRepoLink(id: number): string {
        return this._github_base + "/" + this._username + "/" + this.PROJECT_REFS[id];
    }

    getAllProjectNames(): string[] {
        return this.PROJECT_REFS;
    }
}
