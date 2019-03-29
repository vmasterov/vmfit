import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';
import {FoodTableRowInterface} from '../../../../interfaces/food-table-row.interface';
import {DataExchangeBetweenComponents} from '../../../../services/data-exchange-between-components.service';
import {Subscription} from "rxjs/index";

@Component({
    selector: 'app-food-panel-table',
    templateUrl: './food-panel-table.component.html',
    styleUrls: ['./food-panel-table.component.scss'],
    providers: [FoodService]
})
export class FoodPanelTableComponent implements OnInit, OnDestroy {
    @Input() foodForOnePanel: FoodInterface;

    displayedColumns: string[] = ['name', 'protein', 'carbs', 'fat', 'calories', 'add', 'remove'];
    dataSource: any;
    foodTableRowsArray: FoodTableRowInterface;
    currentFieldName: string;
    currentFieldID: number;
    currentFoodRow: FoodTableRowInterface;
    currentRowNumber: string;
    changeFoodData: Subscription;

    constructor(
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {}

    edit(element: FoodTableRowInterface, rowNumber) {
        this.currentFieldID = element[rowNumber + 'ID'];
        this.currentFieldName = element.name;
        this.currentFoodRow = element;
        this.currentRowNumber = rowNumber;
    }

    checkIsEmpty(event) {
        if (event.target.value.trim().length) {
            this.currentFoodRow[this.currentRowNumber] = event.target.value;

            this.foodForOnePanel.group[0].items[0].name = 'lalka';
            this.dataExchangeBetweenComponents.send(this.foodForOnePanel/*{
                panelID: event.target.getAttribute('data-panel-id'),
                groupID: event.target.getAttribute('data-group-id'),
                itemID: event.target.getAttribute('data-item-id'),
                name: event.target.getAttribute('data-item-name'),
                value: event.target.value
            }*/);
        }

        this.currentFieldID = undefined;
        this.currentFieldName = undefined;
    }

    createChangedFood(input: HTMLElement) {}

    createFoodTableRowsArray(foodFormDB: FoodInterface, displayedColumnsTable: string[]) {
        this.foodTableRowsArray = [];
        for (let i = 0, l = foodFormDB.group.length; i < l; i++) {
            for (let i1 = 0, l1 = foodFormDB.group[i].items.length; i1 < l1; i1++) {
                this.foodTableRowsArray.push({
                    panelID: foodFormDB.id,
                    groupID: foodFormDB.group[i].id,
                    itemID: foodFormDB.group[i].items[i1].id,

                    groupName: foodFormDB.group[i].name,

                    name: foodFormDB.group[i].items[i1].name,
                    nameID: displayedColumnsTable[0] + foodFormDB.group[i].items[i1].id,

                    protein: foodFormDB.group[i].items[i1].nutrients.protein,
                    proteinID: displayedColumnsTable[1] + foodFormDB.group[i].items[i1].id,

                    carbs: foodFormDB.group[i].items[i1].nutrients.carbs,
                    carbsID: displayedColumnsTable[2] + foodFormDB.group[i].items[i1].id,

                    fat: foodFormDB.group[i].items[i1].nutrients.fat,
                    fatID: displayedColumnsTable[3] + foodFormDB.group[i].items[i1].id,

                    calories: foodFormDB.group[i].items[i1].nutrients.calories,
                    caloriesID: displayedColumnsTable[4] + foodFormDB.group[i].items[i1].id
                });
            }
        }
        this.dataSource = this.foodTableRowsArray;
    }

    ngOnInit() {
        this.createFoodTableRowsArray(this.foodForOnePanel, this.displayedColumns);
    }

    ngOnDestroy() {
        this.changeFoodData.unsubscribe();
    }

}
