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
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

}
