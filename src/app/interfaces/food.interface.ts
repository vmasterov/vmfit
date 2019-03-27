export class FoodInterface {
    id: number;
    name: string;
    group: [
        {
            id: number;
            name: string;
            items: [
                {
                    id: number;
                    name: string;
                    nutrients: {
                            protein: string;
                            carbs: string;
                            fat: string;
                            calories: string;
                    }
                }
            ]
        }
    ];
}
