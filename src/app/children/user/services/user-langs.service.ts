import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeAll, Observable, switchMap } from 'rxjs';
import ProjectLanguagesResponse from '../models/response-models/project-languages.response-model';
import ProjectsResponse from '../models/response-models/projects.response-model';

@Injectable()
export class UserLangsService {
    constructor(private readonly http: HttpClient) {}

    getUserProjectsLangs(): Observable<{ [key: string]: number }> {
        return this.getUserProjects().pipe(
            switchMap((projects) =>
                forkJoin(
                    projects.map((project) => this.getProjectLangs(project.id))
                )
            ),
            mergeAll(),
            map((languages) =>
                languages.reduce<{ [key: string]: number }>((acc, language) => {
                    if (acc[language]) {
                        acc[language]++;
                    } else {
                        acc[language] = 1;
                    }
                    return acc;
                }, {})
            )
        );
    }

    private getUserProjects(): Observable<ProjectsResponse> {
        return this.http.get<ProjectsResponse>(
            '/api/v4/projects?membership=true',
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage['accessToken']}`,
                },
            }
        );
    }

    private getProjectLangs(projectId: number): Observable<string[]> {
        return this.http
            .get<ProjectLanguagesResponse>(
                `/api/v4/projects/${projectId}/languages`,
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage['accessToken']}`,
                    },
                }
            )
            .pipe(map((response) => Object.keys(response)));
    }
}
