import {Component, OnInit} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';

@Component({
    selector: 'app-food-panel-accordion',
    templateUrl: './food-panel-accordion.component.html',
    styleUrls: ['./food-panel-accordion.component.scss']
})
export class FoodPanelAccordeonComponent implements OnInit {

    food: FoodInterface[];

    constructor(
        private foodService: FoodService
    ) {
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
        this.foodService.getFood()
            .subscribe(
                (food) => {
                    this.food = food;
                }
            );
    }

}
