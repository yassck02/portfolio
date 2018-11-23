import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarElement } from './elements/navbar/navbar.element';

import { FooterElement } from './elements/footer/footer.element';

import { HomePage } from './pages/home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { Four0FourPage } from './pages/four0four/four0four.page';

@NgModule({
    declarations: [
        AppComponent,

        NavBarElement,
        FooterElement,

        ProjectsPage,
        Four0FourPage,
        HomePage,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
