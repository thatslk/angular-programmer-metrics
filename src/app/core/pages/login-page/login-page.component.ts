import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
    public loginForm!: FormGroup;

    constructor() {
        this.loginForm = new FormGroup({
            "userLogin": new FormControl('', [Validators.required]),
            "userPassword": new FormControl('', [Validators.required]),
        });
    }

    submit() {
        console.log(this.loginForm);
    }
}
