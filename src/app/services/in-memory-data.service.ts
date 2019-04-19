import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
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

        const diet = [
            {
                id: 1,
                name: 'День первый',
                eatings: [
                    {
                        id: 11,
                        name: '1-Завтрак',
                        product: []
                    }
                ]
            }
        ];
        /*
        const diet = [
            {
                id: 1,
                name: 'День первый',
                eatings: [
                    {
                        id: 11,
                        name: '1-Завтрак',
                        product: [
                            {
                                id: 111,
                                groupName: 'фрукты',
                                itemName: '111-яблоко',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            },
                            {
                                id: 112,
                                groupName: 'фрукты',
                                itemName: '112-груша',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            }

                        ]
                    },
                    {
                        id: 12,
                        name: '1-Обед',
                        product: [
                            {
                                id: 121,
                                groupName: 'фрукты',
                                itemName: '121-персик',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            },
                            {
                                id: 122,
                                groupName: 'фрукты',
                                itemName: '122-киви',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            }

                        ]
                    },
                    {
                        id: 13,
                        name: '1-Ужин',
                        product: [
                            {
                                id: 131,
                                groupName: 'фрукты',
                                itemName: '131-банан',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            },
                            {
                                id: 132,
                                groupName: 'фрукты',
                                itemName: '132-апельсин',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            }

                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'День второй',
                eatings: [
                    {
                        id: 21,
                        name: '2-Завтрак',
                        product: [
                            {
                                id: 211,
                                groupName: 'фрукты',
                                itemName: '211-мандарин',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            },
                            {
                                id: 212,
                                groupName: 'фрукты',
                                itemName: '212-ананас',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            }

                        ]
                    },
                    {
                        id: 22,
                        name: '2-Обед',
                        product: [
                            {
                                id: 221,
                                groupName: 'фрукты',
                                itemName: '221-слива',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            },
                            {
                                id: 222,
                                groupName: 'фрукты',
                                itemName: '222-абрикос',
                                nutrients: {
                                    protein: '10',
                                    carbs: '20',
                                    fat: '30',
                                    calories: '40'
                                }
                            }

                        ]
                    }
                ]
            }
        ];
        */

        return {
            food,
            diet
        };
    }
}
