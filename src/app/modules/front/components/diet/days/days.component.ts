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
    /*
    days: DietInterface[] = [
        {
            id: 1,
            name: 'День первый',
            eatings: [
                {
                    id: 11,
                    name: '1-Завтрак',
                    product: [
                        {
                            id: 111,
                            groupName: 'фрукты',
                            itemName: '111-яблоко',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        },
                        {
                            id: 112,
                            groupName: 'фрукты',
                            itemName: '112-груша',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        }

                    ]
                },
                {
                    id: 12,
                    name: '1-Обед',
                    product: [
                        {
                            id: 121,
                            groupName: 'фрукты',
                            itemName: '121-персик',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        },
                        {
                            id: 122,
                            groupName: 'фрукты',
                            itemName: '122-киви',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        }

                    ]
                },
                {
                    id: 13,
                    name: '1-Ужин',
                    product: [
                        {
                            id: 131,
                            groupName: 'фрукты',
                            itemName: '131-банан',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        },
                        {
                            id: 132,
                            groupName: 'фрукты',
                            itemName: '132-апельсин',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        }

                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'День второй',
            eatings: [
                {
                    id: 21,
                    name: '2-Завтрак',
                    product: [
                        {
                            id: 211,
                            groupName: 'фрукты',
                            itemName: '211-мандарин',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        },
                        {
                            id: 212,
                            groupName: 'фрукты',
                            itemName: '212-ананас',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        }

                    ]
                },
                {
                    id: 22,
                    name: '2-Обед',
                    product: [
                        {
                            id: 221,
                            groupName: 'фрукты',
                            itemName: '221-слива',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        },
                        {
                            id: 222,
                            groupName: 'фрукты',
                            itemName: '222-абрикос',
                            nutrients: {
                                protein: '10',
                                carbs: '20',
                                fat: '30',
                                calories: '40'
                            }
                        }

                    ]
                }
            ]
        }
    ];
    */

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

    /*addDay() {
        const
        return
    }*/

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
                                console.log('addDay: answer from DB', this.lastID);
                                addDay();
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
