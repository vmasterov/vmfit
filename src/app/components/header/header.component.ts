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
                    (data) => {
                        if (data.dataType === 'toggleFoodPanel_changePanelState') {
                            if (data.data === true) {
                                this.foodPanelButtonName = 'Закрыть список продуктов';
                            }
                            else {
                                this.foodPanelButtonName = 'Открыть список продуктов';
                            }
                    }
                }
            );
    }

    title = 'Комментарии к коду. Типы переменных. Сохранять при изм. кол-ва элементов в eating or day';
    // title = 'vmfit -- Комментарии к коду. Типы переменных';
    foodPanelButtonName = 'Закрыть список продуктов';

    ngOnInit() {
    }

    toggleFoodPanel() {
        // Send click event to main.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'toggleFoodPanel_click',
            data: 'Toggling food panel'
        });
    }

    ngOnDestroy() {
        this.toggleFoodPanelSubscribe.unsubscribe();
    }

}
