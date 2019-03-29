import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideDirective} from '../../directives/click-outside.directive';
import {AutofocusDirective} from '../../directives/auto-focus.directive';

import {FrontRoutingModule} from './front-routing.module';
import {DietComponent} from './components/diet/diet.component';
import { FoodPanelAccordeonComponent } from './components/food-panel-accordion/food-panel-accordion.component';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FoodPanelTableComponent } from './components/food-panel-table/food-panel-table.component';
import {MatTableModule} from '@angular/material/table';
import { SidenavToolPanelComponent } from './components/sidenav-tool-panel/sidenav-tool-panel.component';

@NgModule({
    declarations: [
        DietComponent,
        FoodPanelAccordeonComponent,
        FoodPanelTableComponent,
        ClickOutsideDirective,
        AutofocusDirective,
        SidenavToolPanelComponent
    ],
    imports: [
        CommonModule,
        FrontRoutingModule,
        FormsModule,

        // Material
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatTableModule
    ]
})
export class FrontModule {
    private static AutoFocusDirective: any;
}
