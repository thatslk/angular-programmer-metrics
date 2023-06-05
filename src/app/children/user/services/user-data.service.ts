import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import UserResponse from '../models/response-models/user-response.model';

@Injectable()
export class UserDataService {
    constructor(private readonly http: HttpClient) {}

    getUserData(): Observable<UserResponse> {
        return this.http.get<UserResponse>('/api/v4/user', {
            headers: {
                Authorization: `Bearer ${window.localStorage['accessToken']}`,
            },
        });
    }
}
