import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header-controls',
    templateUrl: './header-controls.component.html',
    styleUrls: ['./header-controls.component.scss']
})
export class HeaderControlsComponent implements OnInit {

    title = 'План';

    constructor() {
    }

    ngOnInit() {
    }

}
