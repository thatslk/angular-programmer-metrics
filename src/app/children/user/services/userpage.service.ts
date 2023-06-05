import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, forkJoin, mergeAll } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import Commit from '../models/response-models/commit-response.model';
import EventsResponse from '../models/response-models/events-response.model';
import UserResponse from '../models/response-models/user-response.model';
import ProjectsResponse from '../models/response-models/projects-response.model';
import {
    EventBrief,
    CodeLinesStatistic,
} from '../models/state-models/userpage-state.model';
import ProjectLanguagesResponse from '../models/response-models/project-languages-response.model';

@Injectable({ providedIn: 'root' })
export class UserpageService {
    constructor(private readonly http: HttpClient) {}

    getUserData(): Observable<UserResponse> {
        return this.http.get<UserResponse>('/api/v4/user', {
            headers: {
                Authorization: `Bearer ${window.localStorage['accessToken']}`,
            },
        });
    }

    getUserEvents(): Observable<EventBrief[]> {
        return this.http
            .get<EventsResponse>('/api/v4/events', {
                headers: {
                    Authorization: `Bearer ${window.localStorage['accessToken']}`,
                },
            })
            .pipe(
                map(
                    (events) =>
                        events
                            .map((event): EventBrief | undefined => {
                                if (event.push_data) {
                                    return {
                                        project_id: event.project_id,
                                        commit_hex_number:
                                            event.push_data.commit_to,
                                        commit_count:
                                            event.push_data.commit_count,
                                    };
                                }
                                return undefined;
                            })
                            .filter(
                                (event) => event !== undefined
                            ) as EventBrief[]
                )
            );
    }

    getUserCommitsCount(): Observable<number> {
        return this.getUserEvents().pipe(
            map((events) =>
                events.reduce((acc, event) => {
                    console.log(event);
                    return acc + event.commit_count;
                }, 0)
            )
        );
    }

    getUserCodeLinesStatistic(): Observable<CodeLinesStatistic> {
        return this.getUserEvents().pipe(
            map((events) =>
                events.map((event) => {
                    return this.loadStat(event);
                })
            ),
            switchMap((stat) => {
                const result = forkJoin(stat);
                console.log(result);
                return result;
            }),
            map((stats) =>
                stats.reduce(
                    (acc, stat) => {
                        return {
                            sumOfAdditions:
                                acc.sumOfAdditions + stat.sumOfAdditions,
                            sumOfDeletions:
                                acc.sumOfDeletions + stat.sumOfDeletions,
                        };
                    },
                    {
                        sumOfAdditions: 0,
                        sumOfDeletions: 0,
                    }
                )
            )
        );
    }

    getUserProjects(): Observable<ProjectsResponse> {
        return this.http.get<ProjectsResponse>(
            '/api/v4/projects?membership=true',
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage['accessToken']}`,
                },
            }
        );
    }

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

    private loadStat(eventData: EventBrief): Observable<CodeLinesStatistic> {
        return this.http
            .get<Commit>(
                `/api/v4/projects/${eventData.project_id}/repository/commits/${eventData.commit_hex_number}`,
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage['accessToken']}`,
                    },
                }
            )
            .pipe(
                map<Commit, CodeLinesStatistic>((commit) => ({
                    sumOfAdditions: commit.stats.additions,
                    sumOfDeletions: commit.stats.deletions,
                }))
            );
    }
}
