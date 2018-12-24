import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Four0FourPage } from './pages/four0four/four0four.page'
import { ProjectsPage } from './pages/projects/projects.page'
import { HomePage } from './pages/home/home.page'
import { ExperiencePage } from './pages/experience/experience.page'
import { ContactPage } from './pages/contact/contact.page'
import { ProjectDetailPage } from './pages/projects/project-detail.page'
import { ResumePage } from './pages/resume/resume.page'

const routes: Routes = [
    { path: 'projects',     component: ProjectsPage         },
    { path: 'projects/:id', component: ProjectDetailPage    },
    { path: 'home',         component: HomePage             },
    { path: 'contact',      component: ContactPage          },
    { path: 'experience',   component: ExperiencePage       },
    { path: 'resume',       component: ResumePage           },
    { path: '',   redirectTo: '/home', pathMatch: 'full'    },
    { path: '**',           component: Four0FourPage        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
