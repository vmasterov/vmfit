import {Component, OnInit, OnDestroy} from '@angular/core';

import {DietService} from '../../../services/diet.service';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-header-controls',
    templateUrl: './header-controls.component.html',
    styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit, OnDestroy {
    changeDietSubscribe: Subscription;
    dietSaveButtonDisable = true;
    title = 'План';

    constructor(
        private dietService: DietService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    addDay() {
        this.dietService.addDiet({}).subscribe(
            () => {
                // Send request to create a new day to days.component.ts
                this.dataExchangeBetweenComponents.send({
                    dataType: 'addDay',
                    data: ''
                });
            }
        );
    }

    saveDietDB() {
        alert('Данные сохранены');
        this.dietSaveButtonDisable = true;
    }

    ngOnInit() {
        this.changeDietSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'changeDiet') {
                        this.dietSaveButtonDisable = false;
                    }
                });
    }

    ngOnDestroy() {
        this.changeDietSubscribe.unsubscribe();
    }
}
