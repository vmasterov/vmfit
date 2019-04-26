import {Component, OnInit, OnDestroy} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {DietInterface} from '../../../../../interfaces/diet.interface';
import {DietService} from '../../../services/diet.service';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit, OnDestroy {
    addDaySubscribe: Subscription;

    diet: DietInterface[];

    connectDays: string[] = [];
    connectEatings: string[] = [];

    lastID: number;

    constructor(
        private dietService: DietService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {}

    createConnectArrays(days: any): void {
        this.connectDays = [];
        this.connectEatings = [];

        for (let i = 1, l = days.length; i <= l; i++) {
            // console.log(days.length);
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

    addDay(lastID: number) {
        const newDay = {
            id: lastID + 1,
            name: 'День №' + (lastID + 1),
            eatings: [
                {
                    id: (lastID + 1) + 10,
                    name: ((lastID + 1) * 10) + 1 + '-Завтрак',
                    product: []
                }
            ]
        };

        return newDay;
    }

    ngOnInit() {
        this.dietService.getDiet().subscribe(
            diet => {
                this.diet = diet;
                this.createConnectArrays(this.diet);
            }
        );

        // Receive the message from header-controls.component.ts
        this.addDaySubscribe = this.dataExchangeBetweenComponents.data$
            .subscribe(
                (data) => {
                    if (data.dataType === 'addDay') {
                        this.dietService.getDiet().subscribe(
                            diet => {
                                this.diet.push(this.addDay(this.lastID));
                                this.createConnectArrays(this.diet);

                                // Send 'changeDiet' message to header-controls.component.ts
                                this.dataExchangeBetweenComponents.send({
                                   dataType: 'changeDiet',
                                   data: ''
                                });
                            }
                        );
                    }
                }
            );
    }

    ngOnDestroy() {
        this.addDaySubscribe.unsubscribe();
    }

}
