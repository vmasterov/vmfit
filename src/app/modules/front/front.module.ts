import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontRoutingModule} from './front-routing.module';
import {DietComponent} from './components/diet/diet.component';
import { FoodPanelAccordeonComponent } from './components/food-panel-accordeon/food-panel-accordeon.component';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FoodPanelTableComponent } from './components/food-panel-table/food-panel-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        DietComponent,
        FoodPanelAccordeonComponent,
        FoodPanelTableComponent
    ],
    imports: [
        CommonModule,
        FrontRoutingModule,

        // Material
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatTableModule
    ]
})
export class FrontModule {
}
