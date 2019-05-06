import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs/index';
import {DietInterface} from '../../../../../interfaces/diet.interface';
import {NutrientsInterface} from '../../../../../interfaces/nutrients.interface';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

    getTotalSubscribe: Subscription;

    total: NutrientsInterface;
    diet: DietInterface[];

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    getTotal(days: DietInterface[]): void {
        this.total = {
            weight: 0,
            protein: 0,
            carbs: 0,
            fat: 0,
            calories: 0
        };

        for (let i = 0, l = days.length; i < l; i++) {
            for (let i1 = 0, l1 = days[i].eatings.length; i1 < l1; i1++) {
                for (let i2 = 0, l2 = days[i].eatings[i1].product.length; i2 < l2; i2++) {
                    this.total.weight += 100;
                    this.total.protein += +days[i].eatings[i1].product[i2].nutrients.protein;
                    this.total.carbs += +days[i].eatings[i1].product[i2].nutrients.carbs;
                    this.total.fat += +days[i].eatings[i1].product[i2].nutrients.fat;
                    this.total.calories += +days[i].eatings[i1].product[i2].nutrients.calories;
                }
            }
        }
    }

    ngOnInit() {
        // Receive the total weight of products from days.component.ts
        this.getTotalSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    // Get total after adding nutrients value into Diet table into days.component.ts
                    if (data.dataType === 'total') {
                        this.diet = data.data;
                        this.getTotal(this.diet);
                    }

                    // Get total after change nutrients value into food-panel-table.component.ts
                    // Get total after delete row from product.component.ts
                    if ((data.dataType === 'changedFoodObject' && this.diet) ||
                        (data.dataType === 'DIET_DB__deleteEatingRow' && this.diet)) {
                        this.getTotal(this.diet);
                    }
                }
            );
    }

    ngOnDestroy() {
        this.getTotalSubscribe.unsubscribe();
    }
}
