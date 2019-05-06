import {Component, OnInit, Input} from '@angular/core';
import {NutrientsInterface} from '../../../../../interfaces/nutrients.interface';

@Component({
    selector: 'app-deit-caption-table',
    templateUrl: './deit-caption-table.component.html',
    styleUrls: ['./deit-caption-table.component.scss']
})
export class DeitCaptionTableComponent implements OnInit {
    @Input() total: NutrientsInterface;

    constructor() {
    }

    ngOnInit() {
    }

}
