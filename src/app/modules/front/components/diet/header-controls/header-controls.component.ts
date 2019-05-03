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
    changedDietStorage: any;

    testUpdatedDiet: any = [];

    constructor(
        private dietService: DietService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    addDay() {
        /*this.dietService.addDay({}).subscribe(
            () => {
                // Send request to create a new day to days.component.ts
                this.dataExchangeBetweenComponents.send({
                    dataType: 'addDay',
                    data: ''
                });
            }
        );*/

        // Send request to create a new day to days.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'addDayRequest',
            data: ''
        });
    }

    saveDietDB() {
        alert('Данные сохранены');
        this.dietSaveButtonDisable = true;
    }

    ngOnInit() {
        this.changedDietStorage = [];

        // Receive message from days.component about change diet object or remove diet row
        this.changeDietSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'addedDayToDB' ||
                        data.dataType === 'deleteEatingRowFromDB' ||
                        data.dataType === 'addProductToEatingToDB') {
                        this.dietSaveButtonDisable = false;

                        // console.log('contains:', !contains(this.changedDietStorage, data.data));

                        if (!contains(this.changedDietStorage, data.data)) {
                            this.changedDietStorage.push(data.data);
                        }

                        updateDietDB(this.changedDietStorage, this.dietService, this);
                    }

                    // Implement save diet object to DB
                    function contains(arr, elem) {
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i] === elem) {
                                return true;
                            }
                        }
                        return false;
                    }

                    function updateDietDB(changedDietArray, dietService, it) {
                        for (let i = 0, l = changedDietArray.length; i < l; i++) {
                            dietService.updateDiet(changedDietArray[i]).subscribe(
                                () => {
                                    dietService.getDiet().subscribe(
                                        newDiet => {
                                            it.testUpdatedDiet = newDiet;
                                        }
                                    );
                                }
                            );
                        }
                    }
                });
    }

    ngOnDestroy() {
        this.changeDietSubscribe.unsubscribe();
    }
}
