import {Component, OnInit, OnDestroy} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {DietInterface} from '../../../../../interfaces/diet.interface';
import {DietService} from '../../../services/diet.service';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs';
import {DietEatingsInterface} from "../../../../../interfaces/diet-eatings.interface";

@Component({
    selector: 'app-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit, OnDestroy {
    addDaySubscribe: Subscription;
    getProductSubscribe: Subscription;

    diet: DietInterface[];

    connectDays: string[] = [];
    connectEatings: string[] = [];

    lastID: number;

    constructor(private dietService: DietService,
                private dataExchangeBetweenComponents: DataExchangeBetweenComponents) {
    }

    createConnectArrays(days: any): void {
        this.connectDays = [];
        this.connectEatings = [];

        for (let i = 1, l = days.length; i <= l; i++) {
            this.connectDays.push('day_' + i);
            this.lastID = i;

            for (let i1 = 1, l1 = days[i - 1].eatings.length; i1 <= l1; i1++) {
                this.connectEatings.push('eating_' + i + i1);
            }
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.diet, event.previousIndex, event.currentIndex);
    }

    createDay(lastID: number) {
        const newDay = {
            id: lastID + 1,
            name: 'День №' + (lastID + 1),
            eatings: [
                {
                    id: ((lastID + 1) * 10) + 1,
                    name: 'Приём пищи №1',
                    product: []
                }
            ]
        };

        return newDay;
    }

    addEating(fixedDayID: number, clickedDayID: number, lastEatingID: number) {
        this.diet[clickedDayID].eatings.push(this.createEating(lastEatingID, fixedDayID));
        this.createConnectArrays(this.diet);

        // Send 'changeDiet' message and updates diet object to
        // header-controls.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'DIET_DB__addedDay',
            data: this.diet[clickedDayID]
        });

        // Send 'changeDiet' message and updates diet object to
        // food-panel-accordion.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'changeDietFoodPanel',
            data: this.diet
        });
    }

    createEating(lastEatingID: number, fixedDayID: number): DietEatingsInterface {
        return {
            id: fixedDayID * 10 + lastEatingID + 1,
            name: 'Приём пищи № ' + (lastEatingID + 1),
            product: []
        };
    }

    ngOnInit() {
        this.dietService.getDiet().subscribe(
            diet => {
                this.diet = diet;
                this.createConnectArrays(this.diet);
            }
        );

        // Receive the request about create new day from header-controls.component.ts
        this.addDaySubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'addDayRequest') {
                        this.diet.push(this.createDay(this.lastID));
                        this.createConnectArrays(this.diet);

                        // Send 'changeDiet' message and updates diet object to
                        // header-controls.component.ts
                        this.dataExchangeBetweenComponents.send({
                            dataType: 'DIET_DB__addedDay',
                            data: this.diet[this.diet.length - 1]
                        });

                        // Send 'changeDiet' message and updates diet object to
                        // food-panel-accordion.component.ts
                        this.dataExchangeBetweenComponents.send({
                            dataType: 'changeDietFoodPanel',
                            data: this.diet
                        });
                    }
                }
            );

        // Receive the product object from food-panel-table.component.ts
        this.getProductSubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'productObject') {
                        this.diet[data.data[1]].eatings[data.data[2]].product.push(data.data[0]);

                        // Send message about weight of added product to footer.component.ts
                        this.dataExchangeBetweenComponents.send({
                            dataType: 'total',
                            data: this.diet
                        });

                        // Send message about added product to diet table (header-controls.component.ts)
                        this.dataExchangeBetweenComponents.send({
                            dataType: 'DIET_DB__addProductToEating',
                            data: this.diet[data.data[1]]
                        });
                    }
                }
            );
    }

    ngOnDestroy() {
        this.addDaySubscribe.unsubscribe();
        this.getProductSubscribe.unsubscribe();
    }

}

// TODO: First iteration
// TODO: create button "Add eating"
// TODO: add code comments and TS data types

// TODO: Second iteration
// TODO: activate Save button if nutrients in Food table was changed
// TODO: activate Save button if row in Diet table (days, eatings, products) was sorted
