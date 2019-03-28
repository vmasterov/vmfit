import {Component, OnInit, Input} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';

let lalka: any;

@Component({
    selector: 'app-food-panel-table',
    templateUrl: './food-panel-table.component.html',
    styleUrls: ['./food-panel-table.component.scss'],
    providers: [FoodService]
})
export class FoodPanelTableComponent implements OnInit {
    @Input() vol: FoodInterface;

    displayedColumns: string[] = ['name', 'protein', 'carbs', 'fat', 'calories', 'add', 'remove'];
    dataSource: any;
    food: FoodInterface[];
    currentFieldName: string;
    currentFieldID: number;
    elementw: any;
    ss: string;

    constructor(private foodService: FoodService) {
    }

    edit(fieldName: string, fieldID: number, el, nn) {
        this.currentFieldID = fieldID;
        this.currentFieldName = fieldName;
        this.elementw = el;
        this.ss = nn;
    }

    checkIsEmpty(event) {
        if (event.target.value.trim().length) {
            this.elementw[this.ss] = event.target.value;
        }

        this.currentFieldID = undefined;
        this.currentFieldName = undefined;
    }

    ngOnInit() {
        lalka = [];
        for (let i = 0, l = this.vol.group.length; i < l; i++) {
            for (let i1 = 0, l1 = this.vol.group[i].items.length; i1 < l1; i1++) {
                lalka.push({
                    sectionName: this.vol.group[i].name,
                    name: this.vol.group[i].items[i1].name,
                    nameID: 'name' + i + '_' + i1,
                    protein: this.vol.group[i].items[i1].nutrients.protein,
                    proteinID: 'protein' + i + '_' + i1,
                    carbs: this.vol.group[i].items[i1].nutrients.carbs,
                    carbsID: 'carbs' + i + '_' + i1,
                    fat: this.vol.group[i].items[i1].nutrients.fat,
                    calories: this.vol.group[i].items[i1].nutrients.calories
                });
            }
        }
        this.dataSource = lalka;
    }

}














/*
import {Component, OnInit, Input} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';

let lalka: any;

@Component({
    selector: 'app-food-panel-table',
    templateUrl: './food-panel-table.component.html',
    styleUrls: ['./food-panel-table.component.scss'],
    providers: [FoodService]
})
export class FoodPanelTableComponent implements OnInit {
    @Input() vol: FoodInterface;

    displayedColumns: string[] = ['name', 'protein', 'carbs', 'fat', 'calories', 'add', 'remove'];
    dataSource: any;
    food: FoodInterface[];
    currentFieldName: any;
    dd: string;

    constructor(private foodService: FoodService) {
    }

    edit(fieldName: any) {
        this.currentFieldName = fieldName;
        this.dd = fieldName.name;
    }

    checkIsEmpty(event) {
        if (!event.target.value.trim().length) {
            this.currentFieldName.name = this.dd;
        }
        else {
            this.currentFieldName.name = event.target.value;
        }

        this.currentFieldName = undefined;
    }

    ngOnInit() {
        lalka = [];
        for (let i = 0, l = this.vol.group.length; i < l; i++) {
            for (let i1 = 0, l1 = this.vol.group[i].items.length; i1 < l1; i1++) {
                lalka.push({
                    sectionName: this.vol.group[i].name,
                    name: this.vol.group[i].items[i1].name,
                    protein: this.vol.group[i].items[i1].nutrients.protein,
                    carbs: this.vol.group[i].items[i1].nutrients.carbs,
                    fat: this.vol.group[i].items[i1].nutrients.fat,
                    calories: this.vol.group[i].items[i1].nutrients.calories
                });
            }
        }
        this.dataSource = lalka;
    }

}

 */