import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import { FrontModule } from './modules/front/front.module';
import { AdminModule } from './modules/admin/admin.module';
import { Error404Component } from './components/error404/error404.component';
import { LoginModule } from './modules/login/login.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // Material
        MatToolbarModule,
        MatButtonModule,

        FrontModule,
        AdminModule,
        LoginModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
