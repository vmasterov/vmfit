import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    @Input() products;
    @Input() eatingID: number;
    @Input() eatingsLength: number;
    @Input() days;
    @Input() dayID: number;
    @Input() daysLength: number;

    @Input() connectEatings: string[];

    connectedToEatings: string[];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }

        console.log(this.connectedToEatings);
    }

    // createConnectedToArray(length: number, id: number) {
    //     const array = [];
    //     let currentID;
    //
    //     for (let i = 1, l = this.daysLength; i <= l; i++) {
    //         for (let i1 = 1, l1 = this.days[i - 1].eatings.length; i1 <= l1; i1++) {
    //             currentID = i + '' + i1;
    //
    //             if (+currentID !== this.eatingID) {
    //                 array.push('eating_' + currentID);
    //             }
    //         }
    //     }
    //
    //     return array;
    // }

    createConnectedToArray(id: number) {
        this.connectedToEatings = this.connectEatings.filter(item => {
            const index = item.match(/_(\d+)$/)[1];
            return +index !== id;
        });
    }

    ngOnInit() {
        this.createConnectedToArray(this.eatingID);
        // console.log(this.connectedToEatings, this.connectEatings);
    }

}
