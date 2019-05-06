import {Component, OnInit, Input} from '@angular/core';
import {ChangeFoodObjectInterface} from '../../../../../interfaces/changed-food-object.interface';
import {FoodInterface} from '../../../../../interfaces/food.interface';
import {FoodService} from '../../../services/food.service';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    @Input() foodForOnePanel: FoodInterface;

    @Input() currentIndex;
    @Input() displayedColumns;
    @Input() displayedColumnIndex;
    @Input() element;
    @Input() elementCurrentProp;

    currentElement: string;
    currentRowIndex: number;
    currentColumnsName: string;

    constructor(
        private foodService: FoodService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    edit(rowIndex: number, columnsName: string): void {
        this.currentRowIndex = rowIndex;
        this.currentColumnsName = columnsName;
        this.currentElement = columnsName + '_' + rowIndex;
    }

    checkIsEmpty(event: any): void {
        if (event.target.value.trim().length) {
            const changedFoodObject = {
                currentRowIndex: this.currentRowIndex,
                currentColumnsName: this.currentColumnsName,
                inputValue: event.target.value,
                foodForOnePanel: this.foodForOnePanel
            };

            // Send changed the food object to sidenav-tool-panel.component.ts
            this.dataExchangeBetweenComponents.send({
                dataType: 'changedFoodObject',
                data: this.changeFoodObject(changedFoodObject)
            });
        }

        this.currentElement = undefined;
    }

    changeFoodObject(settings: ChangeFoodObjectInterface): FoodInterface {
        if (settings.currentColumnsName === this.displayedColumns[0]) {
            settings.foodForOnePanel.group[settings.currentRowIndex][settings.currentColumnsName] = settings.inputValue;
        }
        else {
            settings.foodForOnePanel.group[settings.currentRowIndex].nutrients[settings.currentColumnsName] = settings.inputValue;
        }

        return settings.foodForOnePanel;
    }

    ngOnInit() {
    }

}
