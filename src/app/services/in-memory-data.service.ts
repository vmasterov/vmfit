import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const food = [
            {
                id: 1,
                name: 'Мясо',
                group: [
                    {
                        id: 11,
                        name: 'Птица',
                        items: [
                            {
                                id: 111,
                                name: 'курица',
                                nutrients: {
                                    protein: '30',
                                    carbs: '20',
                                    fat: '10',
                                    calories: '210'
                                }
                            },
                            {
                                id: 112,
                                name: 'индейка',
                                nutrients: {
                                    protein: '31',
                                    carbs: '21',
                                    fat: '11',
                                    calories: '211'
                                }
                            },
                        ]
                    }
                ]
            },
            {
                id: 2, name: 'Фрукты'
            }
        ];
        return {food};
    }
}