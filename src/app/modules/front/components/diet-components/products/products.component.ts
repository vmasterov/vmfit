import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatTable} from '@angular/material';

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

    @ViewChild('table') table: MatTable<any>;
    dataSource;

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

            const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
            moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
            this.table.renderRows();
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }

        // console.log(this.connectedToEatings);
    }

    createConnectedToArray(id: number) {
        this.connectedToEatings = this.connectEatings.filter(item => {
            const index = item.match(/_(\d+)$/)[1];
            return +index !== id;
        });
    }

    ngOnInit() {
        this.createConnectedToArray(this.eatingID);
        // console.log(this.connectedToEatings);

        this.dataSource = this.products;
    }

}
