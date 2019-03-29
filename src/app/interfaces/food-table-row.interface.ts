export class FoodTableRowInterface {
    [index: number]: {
        sectionName: string;
        name: string;
        nameID: string;
        protein: string;
        proteinID: string;
        carbs: string;
        carbsID: string;
        fat: string;
        fatID: string;
        calories: string;
        caloriesID: string;
    };
    [propName: string]: any;
}

