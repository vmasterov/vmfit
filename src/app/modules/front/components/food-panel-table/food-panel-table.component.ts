import {Component, OnInit, Input} from '@angular/core';
import {FoodService} from '../../services/food.service';
import {FoodInterface} from '../../../../interfaces/food.interface';

export interface tempI {
    sectionName: string;
    name: string;
    protein: string;
    carbs: string;
    fat: string;
    calories: string;
}

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

    constructor(
        private foodService: FoodService
    ) {
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
