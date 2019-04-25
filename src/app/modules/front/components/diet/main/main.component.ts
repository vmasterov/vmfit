import {Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import {Subscription} from "rxjs/index";

import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {FoodService} from '../../../services/food.service';

// Material
import {MatSidenav} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

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
            // Subscribe on click event from header.component.ts
            .subscribe(
                (data) => {
                    if (data.dataType === 'toggleFoodPanel_click') {
                        this.foodPanel.toggle();

                        // Send state of the food panel to header.component.ts
                        this.dataExchangeBetweenComponents.send({
                            dataType: 'toggleFoodPanel',
                            data: this.foodPanel.opened
                        });
                    }
                }
            );
    }

    openedChangeFoodPanel() {
        // Send state of the food panel to header.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'toggleFoodPanel_changePanelState',
            data: this.foodPanel.opened
        });
    }

    ngOnDestroy() {
        this.toggleFoodPanelSubscribe.unsubscribe();
        this.mobileQuery1024.removeListener(this.mobileQueryListener);
    }
}