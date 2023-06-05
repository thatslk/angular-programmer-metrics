import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-layout/user-page.component';
import { UserEventsService } from './services/helper-services/user-events.service';
import { UserCodeLines } from './services/user-code-lines.service';
import { UserCommitsService } from './services/user-commits.service';
import { UserDataService } from './services/user-data.service';
import { UserLangsService } from './services/user-langs.service';

const routes: Routes = [
    {
        path: '',
        component: UserPageComponent,
    },
];

@NgModule({
    declarations: [UserPageComponent],
    imports: [RouterModule.forChild(routes)],
    providers: [
        UserLangsService,
        UserDataService,
        UserCommitsService,
        UserCodeLines,
        UserEventsService,
    ],
    bootstrap: [],
    exports: [RouterModule],
})
export class UserModule {}
