import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {FrontRoutingModule} from './front-routing.module';
import {DietComponent} from './components/diet/diet.component';

@NgModule({
    declarations: [DietComponent],
    imports: [
        CommonModule,
        FrontRoutingModule,

        // Material
        MatSidenavModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class FrontModule {
}
