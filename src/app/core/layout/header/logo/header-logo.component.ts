import { Component } from "@angular/core";

@Component({
    templateUrl: './header-logo.component.html',
    selector: 'header-logo',
    styleUrls: ['./header-logo.component.scss'],
    standalone: true
})
export class LogoComponent {
    logoPath:string = 'assets/images/gitlab-metrics-logo.svg'
}