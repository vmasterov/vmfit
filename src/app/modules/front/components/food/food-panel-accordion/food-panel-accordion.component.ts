import {Component, OnInit, OnDestroy} from '@angular/core';
import {FoodService} from '../../../services/food.service';
import {FoodInterface} from '../../../../../interfaces/food.interface';
import {Subscription} from 'rxjs';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {DietInterface} from '../../../../../interfaces/diet.interface';

@Component({
    selector: 'app-food-panel-accordion',
    templateUrl: './food-panel-accordion.component.html',
    styleUrls: ['./food-panel-accordion.component.scss']
})
export class FoodPanelAccordeonComponent implements OnInit, OnDestroy {
    getDaysResponseSubscribe: Subscription;
    diet: DietInterface[];

    food: FoodInterface[];

    constructor(
        private foodService: FoodService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents) {
    }

    ngOnInit() {
        this.diet = [];

        this.foodService.getFood().subscribe(
            (food) => {
                this.food = food;
            }
        );

        // Reсeive updated diet array from days.component.ts
        this.getDaysResponseSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    // if (data.dataType === 'changeDiet') {
                    if (data.dataType === 'changeDietFoodPanel') {
                        this.diet = data.data;
                    }
                });
    }

    ngOnDestroy() {
        this.getDaysResponseSubscribe.unsubscribe();
    }
}
