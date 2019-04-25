import {Component, OnInit} from '@angular/core';

import {DietService} from '../../../services/diet.service';
import {DataExchangeBetweenComponents} from '../../../../../services/data-exchange-between-components.service';

@Component({
    selector: 'app-header-controls',
    templateUrl: './header-controls.component.html',
    styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit {

    title = 'План';

    constructor(
        private dietService: DietService,
        private dataExchangeBetweenComponents: DataExchangeBetweenComponents
    ) {
    }

    addDay() {
        this.dietService.addDiet({}).subscribe(
            () => {
                // Send message about create a new day to days.component.ts
                this.dataExchangeBetweenComponents.send({
                    dataType: 'addDay',
                    data: 'add'
                });
            }
        );
    }

    ngOnInit() {
    }

}
