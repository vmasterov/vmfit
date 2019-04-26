import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-eatings',
    templateUrl: './eatings.component.html',
    styleUrls: ['./eatings.component.scss']
})
export class EatingsComponent implements OnInit {
    @Input() eatings;
    @Input() days;
    @Input() dayID: number;
    @Input() daysLength: number;

    @Input() connectDays: string[];
    @Input() connectEatings: string[];

    connectedToDays: string[];

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    /*createConnectedToArray(id: number) {
        this.connectedToDays = this.connectDays.filter(item => {
            const index = item.match(/_(\d+)$/)[1];
            return +index !== id;
        });
    }*/


    ngOnInit() {
        // this.createConnectedToArray(this.dayID);
    }
}
