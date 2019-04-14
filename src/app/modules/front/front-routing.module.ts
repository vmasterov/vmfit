import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './components/diet-components/main/main.component';

const routes: Routes = [
    {path: 'diet', component: MainComponent},
    {path: '', redirectTo: '/diet', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontRoutingModule {
}
