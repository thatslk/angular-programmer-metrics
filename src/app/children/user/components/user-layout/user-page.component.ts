import { Component, OnInit } from '@angular/core';
import { UserCodeLines } from '../../services/user-code-lines.service';
import { UserCommitsService } from '../../services/user-commits.service';
import { UserDataService } from '../../services/user-data.service';
import { UserLangsService } from '../../services/user-langs.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
    constructor(
        private readonly userDataService: UserDataService,
        private readonly userCommitsService: UserCommitsService,
        private readonly userCodeLinesService: UserCodeLines,
        private readonly userLangsService: UserLangsService
    ) {}

    ngOnInit(): void {
        this.userDataService.getUserData().subscribe({
            next: (response) => {
                console.log(response);
            },
        });

        this.userCommitsService.getUserCommitsCount().subscribe({
            next: (count) => {
                console.log(count);
            },
        });

        this.userCodeLinesService.getUserCodeLinesStatistic().subscribe({
            next: (stats) => {
                console.log(stats);
            },
        });

        this.userLangsService.getUserProjectsLangs().subscribe({
            next: (stats) => {
                console.log(stats);
            },
        });
    }
}
