import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Four0FourPage } from './pages/four0four/four0four.page'
import { ProjectsPage } from './pages/projects/projects.page'
import { HomePage } from './pages/home/home.page'
import { SoftwarePage } from './pages/software/software.page'
import { ContactPage } from './pages/contact/contact.page'

const routes: Routes = [
    { path: 'projects',     component: ProjectsPage         },
    { path: 'home',         component: HomePage             },
    { path: 'contact',      component: ContactPage          },
    { path: 'software',     component: SoftwarePage         },
    { path: '',   redirectTo: '/home', pathMatch: 'full'    },
    { path: '**',           component: Four0FourPage        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
