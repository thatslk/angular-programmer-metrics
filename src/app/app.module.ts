import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { LoginService } from './core/services/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokensService } from './core/services/tokens.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ApiInterceptor, LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    TokensService],
  bootstrap: [AppComponent]
})
export class AppModule { }
