export class FoodTableRowInterface {
    id: number;
    groupName: string;
    itemName: string;
    nutrients: {
        protein: string;
        carbs: string;
        fat: string;
        calories: string;
    };
}
