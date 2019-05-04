import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

    getTotalSubscribe: Subscription;

    total: any;

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    getTotal(product) {
        for (const key in product) {
            this.total[key] += +product[key];
            this.total['prev' + key] = +product[key];
        }
    }

    ngOnInit() {
        this.total = {
            weight: 0,
            prev_weight: 0,
            protein: 0,
            prev_protein: 0,
            carbs: 0,
            prev_carbs: 0,
            fat: 0,
            prev_fat: 0,
            calories: 0,
            prev_calories: 0
        };

        // Receive the total weight of products from days.component.ts
        this.getTotalSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'total') {
                        data.data.weight = 100;

                        this.getTotal(data.data);
                    }

                    if (data.dataType === 'nutrientsWeight') {
                        console.log(this.total[data.data[0]], data.data[1]);
                        this.total[data.data[0]] -= data.data[1];
                    }
                }
            );
    }

    ngOnDestroy() {
        this.getTotalSubscribe.unsubscribe();
    }
}
