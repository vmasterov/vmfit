import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-deit-caption-table',
    templateUrl: './deit-caption-table.component.html',
    styleUrls: ['./deit-caption-table.component.scss']
})
export class DeitCaptionTableComponent implements OnInit {
    @Input() total;

    constructor() {
    }

    ngOnInit() {
    }

}
