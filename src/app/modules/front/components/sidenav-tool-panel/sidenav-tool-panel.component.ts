import {Component, OnInit} from '@angular/core';

import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';

@Component({
    selector: 'app-sidenav-tool-panel',
    templateUrl: './sidenav-tool-panel.component.html',
    styleUrls: ['./sidenav-tool-panel.component.scss']
})
export class SidenavToolPanelComponent implements OnInit {

    food: FoodInterface[];

    constructor(
        private foodService: FoodService
    ) {
    }

    getDBData() {
        this.foodService.getFood()
            .subscribe(
                (food) => {
                    this.food = food;
                }
            );
    }

    ngOnInit() {}

}
