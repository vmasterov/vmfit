import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {FoodTableRowInterface} from '../../../../../interfaces/food-table-row.interface';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {DietInterface} from '../../../../../interfaces/diet.interface';
import {NutrientsInterface} from '../../../../../interfaces/nutrients.interface';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    @Input() products: NutrientsInterface[];
    @Input() eatingID: number;
    @Input() eatingCurrentID: number;
    @Input() eatingsLength: number;
    @Input() days: DietInterface[];
    @Input() dayID: number;
    @Input() dayCurrentID: number;
    @Input() daysLength: number;

    @Input() connectEatings: string[];

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    deleteRow(product: FoodTableRowInterface, productRow: HTMLElement): void {
        productRow.remove();

        this.days[this.dayCurrentID].eatings[this.eatingCurrentID].product = this.days[this.dayCurrentID].eatings[this.eatingCurrentID].product
            .filter(item => {
            return item.id !== product.id;
        });

        // Send diet row delete request from diet DB (header-controls.component.ts)
        this.dataExchangeBetweenComponents.send({
            dataType: 'DIET_DB__deleteEatingRow',
            data: this.days[this.dayID - 1] // day from which row was deleted
        });
    }

    ngOnInit() {}

}
