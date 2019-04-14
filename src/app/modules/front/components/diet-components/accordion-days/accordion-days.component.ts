import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-accordion-days',
    templateUrl: './accordion-days.component.html',
    styleUrls: ['./accordion-days.component.scss']
})
export class AccordionDaysComponent implements OnInit{
    days = [
        {
            id: 1,
            name: 'day1',
            eatings: [
                {
                    id: 11,
                    name: '11-eating1',
                    product: [
                        '111-Яблоко',
                        '112-Груша'
                    ]
                },
                {
                    id: 12,
                    name: '12-eating2',
                    product: [
                        '121-Слива',
                        '122-Перец'
                    ]
                },
                {
                    id: 13,
                    name: '13-eating3',
                    product: [
                        '131-Картофель',
                        '132-Свёкла',
                        '133-Огурец',
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'day2',
            eatings: [
                {
                    id: 21,
                    name: '21-eating4',
                    product: [
                        '211-Арбуз',
                        '212-Кукуруза'
                    ]
                },
                {
                    id: 22,
                    name: '22-eating5',
                    product: [
                        '221-Малина',
                        '222-Дыня'
                    ]
                }
            ]
        },
        {
            id: 3,
            name: 'day3',
            eatings: [
                {
                    id: 31,
                    name: '31-eating6',
                    product: [
                        '311-Фейхуа',
                        '312-Свинина'
                    ]
                },
                {
                    id: 32,
                    name: '32-eating7',
                    product: [
                        '321-Баранина',
                        '322-Конина'
                    ]
                }
            ]
        },
    ];

    ConnectDays: string[] = [];
    ConnectEatings: string[] = [];

    createConnectArrays(days: any): void {
        for (let i = 1, l = days.length; i <= l; i++) {
            this.ConnectDays.push('day_' + i);

            for (let i1 = 1, l1 = days[i - 1].eatings.length; i1 <= l1; i1++) {
                this.ConnectEatings.push('eatings_' + i + i1);
            }
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.days, event.previousIndex, event.currentIndex);
    }

    ngOnInit() {
        this.createConnectArrays(this.days);
        console.log(this.ConnectDays, this.ConnectEatings);
    }

}
