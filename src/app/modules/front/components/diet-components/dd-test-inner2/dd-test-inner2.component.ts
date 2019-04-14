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
        let currentID;

        for (let i = 1, l = this.daysLength; i <= l; i++) {
            // for (let i1 = 1, l1 = this.eatingsLength; i1 <= l1; i1++) {
            for (let i1 = 1, l1 = this.days[i - 1].eatings.length; i1 <= l1; i1++) {
                currentID = i + '' + i1;

                if (+currentID !== this.eatingID) {
                    array.push('product_' + currentID);
                }
                // array.push('product_' + currentID);
            }
        }

        // console.log(array);
        return array;
    }

    ngOnInit() {
        this.connectedTo = this.createConnectedToArray(this.eatingsLength, this.eatingID);
    }

}
