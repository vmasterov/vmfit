import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dd-test-inner1',
    templateUrl: './dd-test-inner1.component.html',
    styleUrls: ['./dd-test-inner1.component.scss']
})
export class DdTestInner1Component implements OnInit {
    @Input() eatings;
    @Input() days;
    @Input() dayID: number;
    @Input() daysLength: number;

    connectedTo: string[];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    createConnectedToArray(length: number, id: number) {
        const array = [];

        for (let i = 1, l = length; i <= l; i++) {
            if (i !== id) {
                array.push('eating_' + i);
            }
        }

        return array;
    }

    ngOnInit() {
        this.connectedTo = this.createConnectedToArray(this.daysLength, this.dayID);
    }
}
