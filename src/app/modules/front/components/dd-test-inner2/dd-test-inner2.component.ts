import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dd-test-inner2',
  templateUrl: './dd-test-inner2.component.html',
  styleUrls: ['./dd-test-inner2.component.scss']
})
export class DdTestInner2Component implements OnInit {
    @Input() products;
    @Input() eatingID: number;
    @Input() eatingsLength: number;
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
                array.push('product_' + this.dayID + i);
            }
        }
        // console.log(array);
        return array;
    }

    ngOnInit() {
        console.log(this.dayID, this.daysLength);
        this.connectedTo = this.createConnectedToArray(this.eatingsLength, this.eatingID);
    }

}
