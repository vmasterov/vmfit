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
                name: 'Жопа',
                group: [
                    {
                        id: 11,
                        name: 'Птица',
                        items: [
                            {
                                id: 111,
                                name: 'Курица',
                                nutrients: {
                                    protein: '30',
                                    carbs: '20',
                                    fat: '10',
                                    calories: '210'
                                }
                            },
                            {
                                id: 112,
                                name: 'Индейка',
                                nutrients: {
                                    protein: '30',
                                    carbs: '21',
                                    fat: '11',
                                    calories: '211'
                                }
                            },
                        ]
                    },
                    {
                        id: 12,
                        name: 'Другое',
                        items: [
                            {
                                id: 121,
                                name: 'Свинина',
                                nutrients: {
                                    protein: '32',
                                    carbs: '22',
                                    fat: '12',
                                    calories: '212'
                                }
                            },
                            {
                                id: 122,
                                name: 'Баранина',
                                nutrients: {
                                    protein: '33',
                                    carbs: '23',
                                    fat: '13',
                                    calories: '213'
                                }
                            },
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Фрукты',
                group: [
                    {
                        id: 21,
                        name: 'Наши',
                        items: [
                            {
                                id: 211,
                                name: 'Яблоко',
                                nutrients: {
                                    protein: '30',
                                    carbs: '20',
                                    fat: '10',
                                    calories: '210'
                                }
                            },
                            {
                                id: 212,
                                name: 'Груша',
                                nutrients: {
                                    protein: '31',
                                    carbs: '21',
                                    fat: '11',
                                    calories: '211'
                                }
                            },
                        ]
                    },
                    {
                        id: 22,
                        name: 'Заморские',
                        items: [
                            {
                                id: 221,
                                name: 'Киви',
                                nutrients: {
                                    protein: '30',
                                    carbs: '20',
                                    fat: '10',
                                    calories: '210'
                                }
                            },
                            {
                                id: 222,
                                name: 'Ананас',
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
        ];
        return {food};
    }
}
