import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectService } from './services/project.service'
import { ExperienceService } from './services/experience.service'

import { HomePage } from './pages/home/home.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { ContactPage } from './pages/contact/contact.page';
import { ExperiencePage } from './pages/experience/experience.page';
import { ProjectDetailPage } from './pages/projects/project-detail.page';
import { Four0FourPage } from './pages/four0four/four0four.page';
import { ResumePage } from './pages/resume/resume.page';

@NgModule({
    declarations: [
        AppComponent,

        ProjectsPage,
        Four0FourPage,
        HomePage,
        ExperiencePage,
        ContactPage,
        ProjectDetailPage,

        ResumePage
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [ ProjectService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
