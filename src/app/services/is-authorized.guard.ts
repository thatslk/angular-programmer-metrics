import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { jwtTokens } from '../app.module';
import { ITokensService } from './jwt-tokens.service';

@Injectable({ providedIn: 'root' })
export class IsAuthorizedGuard {
    constructor(
        @Inject(jwtTokens)
        private readonly tokenService: ITokensService,
        private readonly _router: Router
    ) {}

    public canActivate = (): Observable<boolean> => {
        return of(this.tokenService.validateTokens()).pipe(
            switchMap((res: boolean) => {
                if (!res) {
                    this._router.navigate(['login']);
                }

                return of(res);
            })
        );
    };
}
