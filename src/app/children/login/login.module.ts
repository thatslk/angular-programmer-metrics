import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-layout/login-page.component';

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent,
    },
];

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
    exports: [RouterModule],
})
export class LoginModule {}
