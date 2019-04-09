import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dd-test',
    templateUrl: './dd-test.component.html',
    styleUrls: ['./dd-test.component.scss']
})
export class DdTestComponent {

    todo = [
        'Get to work',
        'Pick up groceries'
    ];

    done = [
        'Get up',
        'Brush teeth'
    ];

    innerArr = [
        'I',
        'can'
    ];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

}
