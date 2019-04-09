import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dd-test-inner2',
  templateUrl: './dd-test-inner2.component.html',
  styleUrls: ['./dd-test-inner2.component.scss']
})
export class DdTestInner2Component implements OnInit {
    @Input() numb: number;
    @Input() arr: any;
    @Input() movies: any;

    /*movies = [
        'Item #1',
        'Item #2'
    ];*/

    arr1: any;

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
                if (i === this.numb) {
                    continue;
                }

                this.arr1.push('lal_' + i);
            }

            console.log(this.arr1);
        }
    }

}
