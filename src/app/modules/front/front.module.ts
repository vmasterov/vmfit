import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideDirective} from '../../directives/click-outside.directive';
import {AutofocusDirective} from '../../directives/auto-focus.directive';

import {FrontRoutingModule} from './front-routing.module';
import {MainComponent} from './components/diet-components/main/main.component';
import {AccordionDaysComponent} from './components/diet-components/accordion-days/accordion-days.component';
import {AccordionEatingsComponent} from './components/diet-components/accordion-eatings/accordion-eatings.component';
import {AccordionProductsComponent} from './components/diet-components/accordion-products/accordion-products.component';

import { FoodPanelAccordeonComponent } from './components/food-panel-accordion/food-panel-accordion.component';
import { SidenavToolPanelComponent } from './components/sidenav-tool-panel/sidenav-tool-panel.component';
import { FoodPanelTableComponent } from './components/food-panel-table/food-panel-table.component';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        MainComponent,
        FoodPanelAccordeonComponent,
        FoodPanelTableComponent,
        ClickOutsideDirective,
        AutofocusDirective,
        SidenavToolPanelComponent,
        AccordionDaysComponent,
        AccordionEatingsComponent,
        AccordionProductsComponent
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
        MatTableModule,
        DragDropModule
    ]
})
export class FrontModule {
    private static AutoFocusDirective: any;
}
