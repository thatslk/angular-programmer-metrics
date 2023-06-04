import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserpageService } from '../../services/userpage.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
    constructor(
        private readonly userpageService: UserpageService
    ) { }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
        this.userpageService.getUserData()
        .subscribe({
            next: (response) => {
                console.log(response);
            }
        })

        this.userpageService.getUserCommitsCount()
        .subscribe({
            next: (count) => {
                console.log(count);
            }
        })

        this.userpageService.getUserCodeLinesStatistic()
        .subscribe({
            next: (stats) => {
                console.log(stats);
            }
        })
    }
    
}
