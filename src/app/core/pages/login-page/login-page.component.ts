import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import LoginRequest from '../../models/request-models/login-request.model';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
    public loginForm!: FormGroup;
    destroy$ = new Subject<void>();

    constructor(private readonly loginService: LoginService) {
        this.loginForm = new FormGroup({
            userLogin: new FormControl('', [Validators.required]),
            userPassword: new FormControl('', [Validators.required]),
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    submit() {
        console.log(this.loginForm);
        const loginResultObservable = this.loginService.login(
            new LoginRequest(
                this.loginForm.value['userLogin'],
                this.loginForm.value['userPassword']
            )
        );
        loginResultObservable.pipe(takeUntil(this.destroy$)).subscribe({
            next: () => console.log('next'),
        });
    }
}
