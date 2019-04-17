import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {
    days = [
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
                                protein: 10,
                                carbs: 20,
                                fat: 30,
                                calories: 40
                            }
                        },
                        {
                            id: 112,
                            groupName: 'фрукты',
                            itemName: '112-груша',
                            nutrients: {
                                protein: 10,
                                carbs: 20,
                                fat: 30,
                                calories: 40
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
                                protein: 10,
                                carbs: 20,
                                fat: 30,
                                calories: 40
                            }
                        },
                        {
                            id: 122,
                            groupName: 'фрукты',
                            itemName: '122-киви',
                            nutrients: {
                                protein: 10,
                                carbs: 20,
                                fat: 30,
                                calories: 40
                            }
                        }

                    ]
                }



                /*,
                {
                    id: 12,
                    name:
                        '1-Обед',
                    product:
                        [
                            '121-Слива',
                            '122-Перец'
                        ]
                },
                {
                    id: 13,
                    name:
                        '1-Ужин',
                    product:
                        [
                            '131-Картофель',
                            '132-Свёкла',
                            '133-Огурец',
                        ]
                },
                */
            ]
        }/*,
        {
            id: 2,
            name:
                'День второй',
            eatings:
                [
                    {
                        id: 21,
                        name: '2-Завтрак',
                        product: [
                            '211-Арбуз',
                            '212-Кукуруза'
                        ]
                    },
                    {
                        id: 22,
                        name: '2-Обед',
                        product: [
                            '221-Малина',
                            '222-Дыня'
                        ]
                    }
                ]
        },
        {
            id: 3,
            name:
                'День тертий',
            eatings:
                [
                    {
                        id: 31,
                        name: '3-Завтрак',
                        product: [
                            '311-Фейхуа',
                            '312-Свинина'
                        ]
                    },
                    {
                        id: 32,
                        name: '3-Обед',
                        product: [
                            '321-Баранина',
                            '322-Конина'
                        ]
                    }
                ]
        },
        */
    ];

    connectDays: string[] = [];
    connectEatings: string[] = [];

    createConnectArrays(days: any): void {
        for (let i = 1, l = days.length;
             i <= l;
             i++
        ) {
            this.connectDays.push('day_' + i);

            for (let i1 = 1, l1 = days[i - 1].eatings.length; i1 <= l1; i1++) {
                this.connectEatings.push('eating_' + i + i1);
            }
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.days, event.previousIndex, event.currentIndex);
    }

    ngOnInit() {
        this.createConnectArrays(this.days);
    }

}
