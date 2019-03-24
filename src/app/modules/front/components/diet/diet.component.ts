import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

import {DataExchangeBetweenComponents} from '../../../../services/data-exchange-between-components.service';
import {Subscription} from "rxjs/index";

@Component({
    selector: 'app-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit, OnDestroy {

    @ViewChild('foodPanel') foodPanel: MatSidenav;

    toggleFoodPanelSubscribe: Subscription;

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
        this.toggleFoodPanelSubscribe = dataExchangeBetweenComponents.data$
            .subscribe(
                (isOpen) => {
                    if (typeof isOpen === 'string') {
                        this.foodPanel.toggle();
                        this.dataExchangeBetweenComponents.send(this.foodPanel.opened);
                    }
                }
            );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.toggleFoodPanelSubscribe.unsubscribe();
    }
}
