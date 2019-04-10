import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dd-test-inner1',
    templateUrl: './dd-test-inner1.component.html',
    styleUrls: ['./dd-test-inner1.component.scss']
})
export class DdTestInner1Component implements OnInit {
    @Input() eating;
    @Input() eatingID;
    @Input() movies;

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    ngOnInit() {
        if (this.arr) {
            this.arr1 = [];

            for (let i = 0, l = this.arr.length; i < l; i++) {
                if (i === this.eatingID) {
                    continue;
                }

                this.arr1.push('qw_' + i);
            }

            console.log(this.arr1);
        }
    }
}
