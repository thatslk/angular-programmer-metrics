import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiInterceptor } from './services/api.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JwtTokensService } from './services/jwt-tokens.service';

export const jwtTokens: InjectionToken<string> = new InjectionToken(
    'jwt tokens service'
);

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('./children/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'user',
        loadChildren: () =>
            import('./children/user/user.module').then((m) => m.UserModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HeaderComponent,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: jwtTokens,
            useClass: JwtTokensService,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
