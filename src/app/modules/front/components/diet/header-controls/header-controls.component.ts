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
    test: any;

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
        this.changedDietStorage = [];

        // Reсeive message from days.component about change diet object or remove diet row
        this.changeDietSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'changeDiet' || data.dataType === 'deleteDietRowRequest') {
                        this.dietSaveButtonDisable = false;

                        console.log('deit:', data.data.eatings[0].product.length, 'test:', this.test);
                        console.log(data.data === this.test);
                        this.test = data.data;

                        // Implement save diet object to DB
                        /*function contains(arr, elem) {
                            for (let i = 0; i < arr.length; i++) {
                                if (arr[i] === elem) {
                                    return true;
                                }
                            }
                            return false;
                        }

                        contains(this.changedDietStorage, data.data);*/
                    }
                });
    }

    ngOnDestroy() {
        this.changeDietSubscribe.unsubscribe();
    }
}
