import {Component, OnInit, OnDestroy} from '@angular/core';

import {DietService} from '../../../services/diet.service';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs';
import {DietInterface} from '../../../../../interfaces/diet.interface';

@Component({
    selector: 'app-header-controls',
    templateUrl: './header-controls.component.html',
    styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit, OnDestroy {
    changeDietSubscribe: Subscription;
    changedDietStorage: DietInterface[];
    addDaysDietStorage: DietInterface[];

    dietSaveButtonDisable = true;
    title = 'План';

    testUpdatedDiet: any = []; // Test array for debugging

    constructor(private dietService: DietService,
                private dataExchangeBetweenComponents: DataExchangeBetweenComponents) {
    }

    addDay(): void {
        // Send request to create a new day to days.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'addDayRequest',
            data: ''
        });
    }

    saveDietDB(): void {
        this.dietSaveButtonDisable = true;

        this.addDaysToDietDB();
        this.updateDietDB();
    }

    contains(elem: DietInterface): boolean {
        for (const item of this.changedDietStorage) {
            if (item === elem) {
                return true;
            }
        }

        return false;
    }

    addDaysToDietDB(): void {
        for (const item of this.addDaysDietStorage) {
            this.dietService.addDay(item).subscribe(
                () => {
                    this.dietService.getDiet().subscribe(
                        newDiet => {
                            this.testUpdatedDiet = newDiet;
                        }
                    );
                }
            );
        }
        this.addDaysDietStorage = [];
    }

    updateDietDB(): void {
        for (const item of this.changedDietStorage) {
            this.dietService.updateDiet(item).subscribe(
                () => {
                    this.dietService.getDiet().subscribe(
                        newDiet => {
                            this.testUpdatedDiet = newDiet;
                        }
                    );
                }
            );
        }
        this.changedDietStorage = [];
    }

    ngOnInit() {
        this.changedDietStorage = [];
        this.addDaysDietStorage = [];

        // Receive message from days.component about change diet object or remove diet row
        this.changeDietSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType.indexOf('DIET_DB__') !== -1) {

                        // Activate save button
                        this.dietSaveButtonDisable = false;

                        if (data.dataType === 'DIET_DB__deleteEatingRow' ||
                            data.dataType === 'DIET_DB__addProductToEating') {
                            if (!this.contains(data.data)) {
                                this.changedDietStorage.push(data.data);
                            }
                        }

                        if (data.dataType === 'DIET_DB__addedDay') {
                            if (!this.contains(data.data)) {
                                this.addDaysDietStorage.push(data.data);
                            }
                        }
                    }
                });
    }

    ngOnDestroy() {
        this.changeDietSubscribe.unsubscribe();
    }
}
