import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventDto } from '../../models/dtos/event.dto-model';
import EventsResponse from '../../models/response-models/events.response-model';

@Injectable()
export class UserEventsService {
    constructor(private readonly http: HttpClient) {}

    getUserEvents(): Observable<EventDto[]> {
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
                            .map((event): EventDto | undefined => {
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
                            ) as EventDto[]
                )
            );
    }
}
