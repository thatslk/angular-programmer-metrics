import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserEventsService } from './helper-services/user-events.service';

@Injectable()
export class UserCommitsService {
    constructor(private readonly userEvents: UserEventsService) {}

    getUserCommitsCount(): Observable<number> {
        return this.userEvents.getUserEvents().pipe(
            map((events) =>
                events.reduce((acc, event) => {
                    console.log(event);
                    return acc + event.commit_count;
                }, 0)
            )
        );
    }
}
