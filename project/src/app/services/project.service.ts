import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

    private projects: string[];

    private projects_location: string = "../../assets/projects.json"

    private github_base: string = "https://github.com";
    private github_raw:  string = "https://raw.githubusercontent.com";
    private github_api:  string = "https://api.github.com/repos";

    private username: string = "yassck02";

    constructor(private http: HttpClient) { }

    getProjectNames(): Observable<string[]> {
        if (this.projects == undefined) {
            return this.http.get<string[]>(this.projects_location).pipe(
                tap(data => {
                    this.projects = data;
                })
            )
        } else {
            return of(this.projects);
        }
    }

    getReadme(id: number): Observable<string> {
        let header = new HttpHeaders({ 'Accept': 'application/vnd.github.v3.html' })
        let url = this.github_api + "/" + this.username + "/" + this.projects[id] + "/readme";
        return this.http.get(url, { headers: header, responseType: 'text'}).pipe(
            map(data => {
                return data.replace(new RegExp("/images", 'g'), this.getRawBaseLink(id) + "/images");
            })
        );
    }

    getRepoLink(id: number): string {
        return this.github_base + "/" + this.username + "/" + this.projects[id];
    }
    
    getRawBaseLink(id: number): string {
        return this.github_raw + "/" + this.username + "/" + this.projects[id] + "/master";
    }
}