import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './components/user-layout/user-page.component';
import { AtPrefixPipe } from './pipes/at-prefix.pipe';
import { userResolver } from './resolvers/user-page.resolvers';
import { UserEventsService } from './services/helper-services/user-events.service';
import { UserCodeLines } from './services/user-code-lines.service';
import { UserCommitsService } from './services/user-commits.service';
import { UserDataService } from './services/user-data.service';
import { UserLangsService } from './services/user-langs.service';

const routes: Routes = [
    {
        path: '',
        component: UserPageComponent,
        resolve: {
            userState: userResolver,
        },
    },
];

@NgModule({
    declarations: [UserPageComponent, AtPrefixPipe],
    imports: [RouterModule.forChild(routes), CommonModule],
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
