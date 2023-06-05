import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, forkJoin } from 'rxjs';
import CommitResponse from '../models/response-models/commit.response-model';
import { CodeLinesStatisticDto } from '../models/dtos/code-lines-statistic.dto';
import { UserEventsService } from './helper-services/user-events.service';
import { EventDto } from '../models/dtos/event.dto-model';

@Injectable()
export class UserCodeLines {
    constructor(
        private readonly userEvents: UserEventsService,
        private readonly http: HttpClient
    ) {}

    getUserCodeLinesStatisticDto(): Observable<CodeLinesStatisticDto> {
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

    private loadStat(eventData: EventDto): Observable<CodeLinesStatisticDto> {
        return this.http
            .get<CommitResponse>(
                `/api/v4/projects/${eventData.project_id}/repository/commits/${eventData.commit_hex_number}`,
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage['accessToken']}`,
                    },
                }
            )
            .pipe(
                map<CommitResponse, CodeLinesStatisticDto>((commit) => ({
                    sumOfAdditions: commit.stats.additions,
                    sumOfDeletions: commit.stats.deletions,
                }))
            );
    }
}
