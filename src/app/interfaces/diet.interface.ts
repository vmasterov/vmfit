import {DietEatingsInterface} from './diet-eatings.interface';

export interface DietInterface {
    id: number;
    name: string;
    eatings: DietEatingsInterface[];
}
