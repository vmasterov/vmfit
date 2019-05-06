import {NutrientsInterface} from './nutrients.interface';

export class FoodTableRowInterface {
    id: number;
    groupName: string;
    itemName: string;
    nutrients: NutrientsInterface;
}
