import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/index";

import {DataExchangeBetweenComponents} from '../../services/data-exchange-between-components.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    toggleFoodPanelSubscribe: Subscription;

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
        this.toggleFoodPanelSubscribe = dataExchangeBetweenComponents.data$
            .subscribe(
                (isOpen) => {
                    if (typeof isOpen === 'boolean') {
                        isOpen === true ? this.foodPanelButtonName = 'Закрыть список продуктов' : this.foodPanelButtonName = 'Открыть список продуктов';
                    }
                }
            );
    }

    title = 'vmfit';
    foodPanelButtonName = 'Закрыть список продуктов';

    ngOnInit() {
    }

    toggleFoodPanel() {
        this.dataExchangeBetweenComponents.send('toggling food panel');
    }

    ngOnDestroy() {
        this.toggleFoodPanelSubscribe.unsubscribe();
    }

}
