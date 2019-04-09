import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-diet-accordion',
    templateUrl: './diet-accordion.component.html',
    styleUrls: ['./diet-accordion.component.scss']
})
export class DietAccordionComponent implements OnInit {

    days: string[] = ['День 1', 'День 2', 'День 3'];

    constructor() {
    }

    ngOnInit() {
    }

}
