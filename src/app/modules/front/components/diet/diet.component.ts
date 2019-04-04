import {Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import {Subscription} from "rxjs/index";

import {DataExchangeBetweenComponents} from '../../../../services/data-exchange-between-components.service';
import {FoodService} from '../../services/food.service';

// Material
import {MatSidenav} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'app-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.scss']
})
export class DietComponent implements OnInit, OnDestroy {

    @ViewChild('foodPanel') foodPanel: MatSidenav;

    toggleFoodPanelSubscribe: Subscription;
    mobileQuery1024: MediaQueryList;

    private mobileQueryListener: () => void;

    constructor(
        private foodService: FoodService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        this.mobileQuery1024 = media.matchMedia('(max-width: 1024px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery1024.addListener(this.mobileQueryListener);
    }

    ngOnInit() {
        this.toggleFoodPanelSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    // Toggle food panel
                    if (typeof data === 'string') {
                        this.foodPanel.toggle();
                        this.dataExchangeBetweenComponents.send(this.foodPanel.opened);
                    }
                }
            );
    }

    openedChangeFoodPanel() {
        this.dataExchangeBetweenComponents.send(this.foodPanel.opened);
    }

    ngOnDestroy() {
        this.toggleFoodPanelSubscribe.unsubscribe();
        this.mobileQuery1024.removeListener(this.mobileQueryListener);
    }
}