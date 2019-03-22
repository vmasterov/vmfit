import {Component, OnInit} from '@angular/core';

import {ToggleFoodPanelService} from '../../services/toggle-food-panel.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private toggleFoodPanelService: ToggleFoodPanelService
    ) {
    }

    title = 'vmfit';
    count = 1;

    ngOnInit() {
    }

    test() {
        this.count === 0 ? this.count = 1 : this.count = 0;
        this.toggleFoodPanelService.gget(this.count);
    }

}
