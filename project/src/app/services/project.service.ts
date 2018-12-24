import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

    PROJECT_REFS: string[];

    private _github_base: string = "https://github.com";
    private _girhub_raw: string = "https://raw.githubusercontent.com";
    private _api_endpoint: string = "https://api.github.com/repos";
    private _username: string = "yassck02";

    constructor(private http: HttpClient) {
        this.http.get('../../assets/projects.txt', { responseType: 'text' }).subscribe(data => {
            this.PROJECT_REFS = data.split("\n");
        })
    }

    // ex: curl -H "Accept: application/vnd.github.v3.html" https://api.github.com/repos/yassck02/Spirographer/readme
    getProjectReadme(id: number):Observable<any> {
        let head = new HttpHeaders({
            'Accept': 'application/vnd.github.v3.html',
         })
        let url = this._api_endpoint + "/" + this._username + "/" + this.PROJECT_REFS[id] + "/readme";
        return this.http.get(url, { headers: head, responseType: 'text'});
    }

    // eg 'Spirographer'
    getProjectName(id: number): string {
        return this.PROJECT_REFS[id];
    }

    // eg https://api.github.com/repos/yassck02/Spirographer
    getProjectRepoLink(id: number): string {
        return this._github_base + "/" + this._username + "/" + this.PROJECT_REFS[id];
    }
    
    //eg https://raw.githubusercontent.com/yassck02/Spirographer/master
    getRawBaseLink(id: number): string {
        return this._girhub_raw + "/" + this._username + "/" + this.PROJECT_REFS[id] + "/master";
    }

    getAllProjectNames(): string[] {
        return this.PROJECT_REFS;
    }
}