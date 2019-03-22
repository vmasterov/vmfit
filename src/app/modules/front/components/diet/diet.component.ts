import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

import {ToggleFoodPanelService} from '../../../../services/toggle-food-panel.service';

@Component({
    selector: 'app-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit {

    @ViewChild('sidenav') sidenav: MatSidenav;

    wait: number;

    constructor(
        private toggleFoodPanelService: ToggleFoodPanelService
    ) {
        toggleFoodPanelService.vv$.subscribe(
            data => {
                this.wait = data;
                data === 0 ? this.sidenav.close() : this.sidenav.open();
            });
    }

    ngOnInit() {
    }

    togglePanel() {
        this.sidenav.toggle();
    }

}
