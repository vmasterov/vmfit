import {FoodTableRowInterface} from './food-table-row.interface';

export class FoodInterface {
    id: number;
    sectionName: string;
    group: FoodTableRowInterface[];
}
