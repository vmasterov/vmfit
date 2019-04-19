import {Component, OnInit} from '@angular/core';
import {FoodService} from '../../../services/food.service';
import {FoodInterface} from '../../../../../interfaces/food.interface';

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

    ngOnInit() {
        this.foodService.getFood()
            .subscribe(
                (food) => {
                    this.food = food;
                }
            );
    }

}
