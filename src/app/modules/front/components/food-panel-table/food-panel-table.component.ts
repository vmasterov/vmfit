import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';
import {ChangeFoodObjectInterface} from '../../../../interfaces/changed-food-object.interface';
import {FoodTableRowInterface} from '../../../../interfaces/food-table-row.interface';
import {DataExchangeBetweenComponents} from '../../../../services/data-exchange-between-components.service';

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
    currentElement: string;
    currentRowIndex: number;
    currentColumnsName: string;

    updatedFoodData: Subscription;

    constructor(
        private foodService: FoodService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    edit(rowIndex: number, columnsName: string) {
        this.currentRowIndex = rowIndex;
        this.currentColumnsName = columnsName;
        this.currentElement = columnsName + '_' + rowIndex;
    }

    checkIsEmpty(event) {
        if (event.target.value.trim().length) {
            const changedFoodObject = {
                currentRowIndex: this.currentRowIndex,
                currentColumnsName: this.currentColumnsName,
                inputValue: event.target.value,
                foodForOnePanel: this.foodForOnePanel
            };

            this.dataExchangeBetweenComponents.send(this.changeFoodObject(changedFoodObject));
        }

        this.currentElement = undefined;
    }

    changeFoodObject(settings: ChangeFoodObjectInterface): FoodInterface {
        console.log(settings.currentColumnsName, this.displayedColumns[0]);
        if (settings.currentColumnsName === this.displayedColumns[0]) {
            settings.foodForOnePanel.group[settings.currentRowIndex][settings.currentColumnsName] = settings.inputValue;
        }
        else {
            settings.foodForOnePanel.group[settings.currentRowIndex].nutrients[settings.currentColumnsName] = settings.inputValue;
        }

        return settings.foodForOnePanel;
    }

    deleteRow(element) {
        this.dataSource = this.dataSource.filter(i => i !== element);

        this.foodForOnePanel.group = this.dataSource;

        this.updatedFoodData = this.foodService.updateFood(this.foodForOnePanel).subscribe();
    }

    ngOnInit() {
        this.dataSource = this.foodForOnePanel.group;
    }

    ngOnDestroy() {
        this.updatedFoodData.unsubscribe();
    }
}
