import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DietInterface} from '../../../../../interfaces/diet.interface';
import {DietEatingsInterface} from '../../../../../interfaces/diet-eatings.interface';

@Component({
    selector: 'app-eatings',
    templateUrl: './eatings.component.html',
    styleUrls: ['./eatings.component.scss']
})
export class EatingsComponent implements OnInit {
    @Input() eatings: DietEatingsInterface[];
    @Input() days: DietInterface[];
    @Input() dayID: number;
    @Input() dayCurrentID: number;
    @Input() daysLength: number;

    @Input() connectDays: string[];
    @Input() connectEatings: string[];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    ngOnInit() {}
}
