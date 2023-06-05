import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import LoginRequest from '../models/request-models/login.request-model';
import LoginResponse from '../models/response-models/login.response-model';
import { ITokensService } from '../../../services/jwt-tokens.service';
import { Inject, Injectable } from '@angular/core';
import { jwtTokens } from 'app/app.module';

@Injectable()
export class LoginService {
    constructor(
        private readonly http: HttpClient,
        @Inject(jwtTokens)
        private readonly tokenService: ITokensService
    ) {}

    login(credentials: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>('/oauth/token', credentials).pipe(
            tap((response) =>
                this.tokenService.setTokens({
                    accessToken: response.access_token,
                    refreshToken: response.refresh_token,
                })
            )
        );
    }
}
