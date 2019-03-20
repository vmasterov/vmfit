import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DietComponent} from './components/diet/diet.component';

const routes: Routes = [
    {path: 'diet', component: DietComponent},
    {path: '', redirectTo: '/diet', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontRoutingModule {
}
