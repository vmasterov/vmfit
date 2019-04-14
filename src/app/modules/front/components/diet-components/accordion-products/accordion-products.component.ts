import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-accordion-products',
    templateUrl: './accordion-products.component.html',
    styleUrls: ['./accordion-products.component.scss']
})
export class AccordionProductsComponent implements OnInit {
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
            // console.log('no change');
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            // console.log('change');
        }
        // console.log(this.connectedTo);
    }

    createConnectedToArray(length: number, id: number) {
        const array = [];
        let currentID;

        for (let i = 1, l = this.daysLength; i <= l; i++) {
            for (let i1 = 1, l1 = this.days[i - 1].eatings.length; i1 <= l1; i1++) {
                currentID = i + '' + i1;

                if (+currentID !== this.eatingID) {
                    array.push('eating_' + currentID);
                }
            }
        }

        // console.log(array);
        return array;
    }

    ngOnInit() {
        this.connectedTo = this.createConnectedToArray(this.eatingsLength, this.eatingID);
        // console.log(1);
    }

}
