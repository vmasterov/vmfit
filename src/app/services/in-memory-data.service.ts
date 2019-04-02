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
                sectionName: 'Мясо',
                group: [
                    {
                        id: 11,
                        groupName: 'Птица',
                        itemName: 'Курица',
                        nutrients: {
                            protein: '30',
                            carbs: '20',
                            fat: '10',
                            calories: '210'
                        }
                    },
                    {
                        id: 12,
                        groupName: 'Птица',
                        itemName: 'Индейка',
                        nutrients: {
                            protein: '30',
                            carbs: '21',
                            fat: '11',
                            calories: '211'
                        }
                    }
                ]
            },
            {
                id: 2,
                sectionName: 'Фрукты',
                group: [
                    {
                        id: 21,
                        groupName: 'Красные',
                        itemName: 'Яблоко',
                        nutrients: {
                            protein: '30',
                            carbs: '20',
                            fat: '10',
                            calories: '210'
                        }
                    },
                    {
                        id: 22,
                        groupName: 'Зелёные',
                        itemName: 'Груша',
                        nutrients: {
                            protein: '30',
                            carbs: '21',
                            fat: '11',
                            calories: '211'
                        }
                    }
                ]
            }
        ];

        return {food};
    }
}
