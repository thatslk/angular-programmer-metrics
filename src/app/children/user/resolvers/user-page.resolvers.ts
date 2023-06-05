import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import UserPageState from '../models/state-model/user-page.state-model';
import { UserCodeLines } from '../services/user-code-lines.service';
import { UserCommitsService } from '../services/user-commits.service';
import { UserDataService } from '../services/user-data.service';
import { UserLangsService } from '../services/user-langs.service';

export const userResolver: ResolveFn<Observable<UserPageState>> = () => {
    const codeLinesStatistic =
        inject(UserCodeLines).getUserCodeLinesStatisticDto();
    const commitsCount = inject(UserCommitsService).getUserCommitsCount();
    const topLanguages = inject(UserLangsService).getUserProjectsLangs();
    const userData = inject(UserDataService).getUserData();

    return forkJoin({
        codeLinesStatistic: codeLinesStatistic,
        commitsCount: commitsCount,
        topLanguages: topLanguages,
        userData: userData,
    }) as Observable<UserPageState>;
};
