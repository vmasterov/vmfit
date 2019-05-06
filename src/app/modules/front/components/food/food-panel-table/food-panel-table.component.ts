import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {FoodInterface} from '../../../../../interfaces/food.interface';
import {FoodTableRowInterface} from '../../../../../interfaces/food-table-row.interface';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';
import {DietInterface} from '../../../../../interfaces/diet.interface';
import {NutrientsInterface} from '../../../../../interfaces/nutrients.interface';

@Component({
    selector: 'app-food-panel-table',
    templateUrl: './food-panel-table.component.html',
    styleUrls: ['./food-panel-table.component.scss']
})
export class FoodPanelTableComponent implements OnInit, OnDestroy {
    @Input() foodForOnePanel: FoodInterface;
    @Input() diet: DietInterface[];

    dataSource: FoodTableRowInterface[];
    displayedColumns: string[] = ['itemName', 'protein', 'carbs', 'fat', 'calories', 'add', 'remove'];

    rowIndex: number;

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    deleteRow(element: FoodTableRowInterface): void {
        this.dataSource = this.dataSource.filter(i => i !== element);

        this.foodForOnePanel.group = this.dataSource;

        // Send info about deleted food table row to sidenav-tool-panel.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'deleteFoodTableRow',
            data: this.foodForOnePanel
        });
    }

    addProduct(element: FoodTableRowInterface, dayID: number, eatingID: number): void {
        console.log(element);

        // Send product object to days.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'productObject',
            data: [element, dayID, eatingID]
        });
    }

    ngOnInit() {
        this.dataSource = this.foodForOnePanel.group;
    }

    ngOnDestroy() {}
}
