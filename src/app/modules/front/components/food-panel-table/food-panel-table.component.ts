import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';
import {FoodTableRowInterface} from '../../../../interfaces/food-table-row.interface';
import {DataExchangeBetweenComponents} from '../../../../services/data-exchange-between-components.service';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-food-panel-table',
    templateUrl: './food-panel-table.component.html',
    styleUrls: ['./food-panel-table.component.scss']
})
export class FoodPanelTableComponent implements OnInit, OnDestroy {
    @Input() foodForOnePanel: FoodInterface;

    displayedColumns: string[] = ['itemName', 'protein', 'carbs', 'fat', 'calories', 'add', 'remove'];
    dataSource: any;
    foodTableRowsArray: FoodTableRowInterface;
    currentFieldName: string;
    currentFieldID: number;
    currentFoodRow: FoodTableRowInterface;
    currentRowNumber: string;
    changeFoodData: Subscription;

    // new
    currentElement: any;
    ii: any;
    dd: any;

    constructor(private dataExchangeBetweenComponents: DataExchangeBetweenComponents,
                private foodService: FoodService) {
    }

    edit(i, d) {
        this.ii= i;
        this.dd = d;
        this.currentElement = d + '_' + i.id;
    }

    checkIsEmpty(event) {
        if (event.target.value.trim().length) {

            this.changeFoodObject(this.ii, this.dd, event.target.value);

            // this.dataExchangeBetweenComponents.send(this.createChangedFoodObject(event.target, this.foodForOnePanel));
        }
        this.currentElement = undefined;
    }

    changeFoodObject(qw, wq, ee) {
        console.log(wq, this.displayedColumns[0]);
        if (qw === this.displayedColumns[0]) {
            this.foodForOnePanel.group[0][qw] = ee;
        }
        else {
            this.foodForOnePanel.group[0]['nutrients'] = ee;
        }
        // console.log(this.foodForOnePanel);
    }

    createChangedFoodObject(input: HTMLElement, foodObject: FoodInterface) {
        const panelID = input.getAttribute('data-panel-id');
        const groupID = input.getAttribute('data-group-id');
        const itemID = input.getAttribute('data-item-id');
        const itemName = input.getAttribute('data-item-name');
        // const value1 = input.value;

        // console.log(groupID, itemID, itemName);

        // foodObject.group[11].items[itemID][itemName] = 'waca';
        return foodObject;
    }

    createFoodTableRowsArray(foodFormDB: FoodInterface, displayedColumnsTable: string[]) {

        this.dataSource = foodFormDB.group;
        /*
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

        // this.dataSource = this.foodTableRowsArray;
        this.dataSource = foodFormDB.group;
        */
    }

    ngOnInit() {
        this.createFoodTableRowsArray(this.foodForOnePanel, this.displayedColumns);
    }

    ngOnDestroy() {
        this.changeFoodData.unsubscribe();
    }

}
