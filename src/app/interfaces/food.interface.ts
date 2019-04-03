export class FoodInterface {
    id: number;
    sectionName: string;
    group: [
        {
            id: number;
            groupName: string;
            itemName: string;
            nutrients: {
                protein: string;
                carbs: string;
                fat: string;
                calories: string;
            }
        }
    ];
}
