import { Component } from '@angular/core';
import { LogoComponent } from './logo/header-logo.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [LogoComponent],
    standalone: true,
})
export class HeaderComponent {}
