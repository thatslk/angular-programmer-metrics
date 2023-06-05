import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-statistic-card',
    templateUrl: './statistic-card.component.html',
    styleUrls: ['./statistic-card.component.scss'],
})
export class StatisticCardComponent implements OnInit {
    @Input() labelText = '';
    @Input() statText = '';
    @Input() statColor = '';

    @ViewChild('label', { static: false })
    labelRef: ElementRef | undefined;

    @ViewChild('stat', { static: false })
    statRef: ElementRef | undefined;

    constructor() {
        if (this.labelRef !== undefined && this.statRef !== undefined) {
            this.labelRef.nativeElement.textContent = this.labelText;
            this.statRef.nativeElement.textContent = this.statText;
        }
    }
    ngOnInit(): void {
        console.log('ON INIT!');
    }
}
