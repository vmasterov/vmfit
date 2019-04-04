import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/index';

import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';
import {DataExchangeBetweenComponents} from '../../../../services/data-exchange-between-components.service';
import {ChangeFoodObjectInterface} from '../../../../interfaces/changed-food-object.interface';

@Component({
    selector: 'app-sidenav-tool-panel',
    templateUrl: './sidenav-tool-panel.component.html',
    styleUrls: ['./sidenav-tool-panel.component.scss']
})
export class SidenavToolPanelComponent implements OnInit, OnDestroy {
    food: FoodInterface[];
    updatedFoodObject: ChangeFoodObjectInterface;
    undatedFoodData: Subscription;
    toggleFoodPanelSubscribe: Subscription;

    constructor(
        private foodService: FoodService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
        ) {
    }

    getDBData() {
        this.undatedFoodData = this.foodService.updateFood(this.updatedFoodObject).subscribe();

        this.foodService.getFood()
            .subscribe(
                (food) => {
                    this.food = food;
                }
            );

        this.updatedFoodObject = undefined;
    }

    ngOnInit() {
        this.toggleFoodPanelSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    // Get changed data from food table
                    if (typeof data === 'object') {
                        this.updatedFoodObject = data;
                    }
                }
            );
    }

    ngOnDestroy() {
        this.undatedFoodData.unsubscribe();
        this.toggleFoodPanelSubscribe.unsubscribe();
    }
}
