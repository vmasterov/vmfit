import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideDirective} from '../../directives/click-outside.directive';
import {AutofocusDirective} from '../../directives/auto-focus.directive';

import {FrontRoutingModule} from './front-routing.module';
import {MainComponent} from './components/diet/main/main.component';
import {DaysComponent} from './components/diet/days/days.component';
import {EatingsComponent} from './components/diet/eatings/eatings.component';
import {ProductsComponent} from './components/diet/products/products.component';

import { FoodPanelAccordeonComponent } from './components/food/food-panel-accordion/food-panel-accordion.component';
import { SidenavToolPanelComponent } from './components/food/sidenav-tool-panel/sidenav-tool-panel.component';
import { FoodPanelTableComponent } from './components/food/food-panel-table/food-panel-table.component';

import { InputComponent } from './components/useful/input/input.component';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HeaderControlsComponent } from './components/diet/header-controls/header-controls.component';

@NgModule({
    declarations: [
        MainComponent,
        FoodPanelAccordeonComponent,
        FoodPanelTableComponent,
        ClickOutsideDirective,
        AutofocusDirective,
        SidenavToolPanelComponent,
        DaysComponent,
        EatingsComponent,
        ProductsComponent,
        InputComponent,
        HeaderControlsComponent
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
