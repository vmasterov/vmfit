import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dd-test',
    templateUrl: './dd-test.component.html',
    styleUrls: ['./dd-test.component.scss']
})
export class DdTestComponent {

    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones'
    ];

    days = [
        {
            id: 1,
            name: 'day1',
            eatings: [
                {
                    id: 11,
                    name: 'eating1',
                    food: [
                        '0-Яблоко',
                        '1-Груша'
                    ]
                },
                {
                    id: 12,
                    name: 'eating2',
                    food: [
                        '2-Слива',
                        '3-Перец'
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'day2',
            eatings: [
                {
                    id: 21,
                    name: 'eating',
                    food: [
                        '4-Арбуз',
                        '5-Кукуруза'
                    ]
                },
                {
                    id: 22,
                    name: 'eating',
                    food: [
                        '6-Малина',
                        '7-Дыня'
                    ]
                }
            ]
        }
    ];

    days1 = [
        [
            [
                '0-Яблоко',
                '1-Груша',
            ],
            [
                '2-Слива',
                '3-Перец',
            ]
        ],
        [
            [
                '4-Арбуз',
                '5-Кукуруза',
            ],
            [
                '6-Малина',
                '7-Дыня',
            ]
        ]
    ];

    drop(event: CdkDragDrop<string[]>) {
        // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        moveItemInArray(this.days, event.previousIndex, event.currentIndex);
    }

}
