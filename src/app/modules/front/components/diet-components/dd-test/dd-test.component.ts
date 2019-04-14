import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dd-test',
    templateUrl: './dd-test.component.html',
    styleUrls: ['./dd-test.component.scss']
})
export class DdTestComponent {
    days = [
        {
            id: 1,
            name: 'day1',
            eatings: [
                {
                    id: 11,
                    name: 'eating1',
                    product: [
                        'Яблоко',
                        'Груша'
                    ]
                },
                {
                    id: 12,
                    name: 'eating2',
                    product: [
                        'Слива',
                        'Перец'
                    ]
                },
                {
                    id: 13,
                    name: 'eating3',
                    product: [
                        'Картофель',
                        'Свёкла',
                        'Огурец',
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
                    name: 'eating4',
                    product: [
                        'Арбуз',
                        'Кукуруза'
                    ]
                },
                {
                    id: 22,
                    name: 'eating5',
                    product: [
                        'Малина',
                        'Дыня'
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
                    name: 'eating6',
                    product: [
                        'Фейхуа',
                        'Свинина'
                    ]
                },
                {
                    id: 32,
                    name: 'eating7',
                    product: [
                        'Баранина',
                        'Конина'
                    ]
                }
            ]
        },
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.days, event.previousIndex, event.currentIndex);
    }

}
