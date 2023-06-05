import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-layout/user-page.component';

const routes: Routes = [
    {
        path: '',
        component: UserPageComponent,
    },
];

@NgModule({
    declarations: [UserPageComponent],
    imports: [RouterModule.forChild(routes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule],
})
export class UserModule {}
