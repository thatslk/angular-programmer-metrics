import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, distinctUntilChanged, tap, shareReplay } from "rxjs/operators";
import LoginRequest from "../models/request-models/login-request.model";
import LoginResponse from "../models/response-models/login-response.model";
import { TokensService } from "./tokens.service";

@Injectable()
export class LoginService {
    constructor(
        private readonly http: HttpClient,
        private readonly tokenService: TokensService
      ) {}

    login(credentials: LoginRequest): Observable<LoginResponse> {
        console.log("Login method");
        console.log(credentials);
        return this.http
            .post<LoginResponse>("/oauth/token", credentials)
            .pipe(tap(response => this.tokenService.setTokens({
                accessToken: response.access_token,
                refreshToken: response.refresh_token
            })));
    }
}