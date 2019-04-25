import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {FoodService} from '../../../services/food.service';
import {FoodInterface} from '../../../../../interfaces/food.interface';
import {FoodTableRowInterface} from '../../../../../interfaces/food-table-row.interface';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';

@Component({
    selector: 'app-food-panel-table',
    templateUrl: './food-panel-table.component.html',
    styleUrls: ['./food-panel-table.component.scss']
})
export class FoodPanelTableComponent implements OnInit, OnDestroy {
    @Input() foodForOnePanel: FoodInterface;

    dataSource: FoodTableRowInterface[];
    displayedColumns: string[] = ['itemName', 'protein', 'carbs', 'fat', 'calories', 'add', 'remove'];

    rowIndex: number;

    constructor(
        private foodService: FoodService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    deleteRow(element) {
        this.dataSource = this.dataSource.filter(i => i !== element);

        this.foodForOnePanel.group = this.dataSource;

        // Send info about deleted food table row to sidenav-tool-panel.component.ts
        this.dataExchangeBetweenComponents.send({
            dataType: 'deleteFoodTableRow',
            data: this.foodForOnePanel
        });
    }

    ngOnInit() {
        this.dataSource = this.foodForOnePanel.group;
    }

    ngOnDestroy() {}
}
