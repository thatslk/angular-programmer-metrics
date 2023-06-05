import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, forkJoin } from 'rxjs';
import Commit from '../models/response-models/commit-response.model';
import {
    CodeLinesStatistic,
    EventBrief,
} from '../models/state-models/userpage-state.model';
import { UserEventsService } from './helper-services/user-events.service';

@Injectable()
export class UserCodeLines {
    constructor(
        private readonly userEvents: UserEventsService,
        private readonly http: HttpClient
    ) {}

    getUserCodeLinesStatistic(): Observable<CodeLinesStatistic> {
        return this.userEvents.getUserEvents().pipe(
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
