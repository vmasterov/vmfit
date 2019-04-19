import {FoodTableRowInterface} from './food-table-row.interface';

export interface DietEatingsInterface {
    id: number;
    name: string;
    product: FoodTableRowInterface[];
}