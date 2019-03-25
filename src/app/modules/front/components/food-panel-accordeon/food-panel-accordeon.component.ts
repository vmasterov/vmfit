import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-food-panel-accordeon',
    templateUrl: './food-panel-accordeon.component.html',
    styleUrls: ['./food-panel-accordeon.component.scss']
})
export class FoodPanelAccordeonComponent implements OnInit {

    constructor() {
    }

    panelOpen(panel) {
        // console.log('I am opened', panel);
    }

    panelClosed(panel) {
        // console.log('I am closed', panel);
        // panel.remove();
        // console.log(panel._document.activeElement.parentElement);
    }

    remove(panel) {
        // panel._document.activeElement.parentElement.remove();
    }

    ngOnInit() {
    }

}
