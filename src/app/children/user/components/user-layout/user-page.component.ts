import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import fadingAnimation from 'app/animations/fade.animation';
import UserPageState from '../../models/state-model/user-page.state-model';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
    animations: [fadingAnimation],
})
export class UserPageComponent implements OnInit {
    public state: UserPageState = {} as UserPageState;

    constructor(private readonly activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({ userState }) => {
            this.state = userState;
        });
    }
}
