import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtTokens } from 'app/app.module';
import { ITokensService } from 'app/services/jwt-tokens.service';
import { LogoComponent } from './logo/header-logo.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [LogoComponent, CommonModule],
    standalone: true,
})
export class HeaderComponent {
    constructor(
        @Inject(jwtTokens)
        private readonly tokenService: ITokensService,
        private readonly _router: Router
    ) {}

    isLoggedIn = () => {
        return this.tokenService.validateTokens();
    };

    logout = () => {
        this.tokenService.removeTokens();
        this._router.navigate(['login']);
    };
}
