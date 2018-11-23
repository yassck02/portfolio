import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Four0FourPage } from './pages/four0four/four0four.page'
import { ProjectsPage } from './pages/projects/projects.page'
import { HomePage } from './pages/home/home.page'

const routes: Routes = [
    { path: 'projects',     component: ProjectsPage         },
    { path: 'home',         component: HomePage             },
    { path: '',   redirectTo: '/home', pathMatch: 'full'    },
    { path: '**',           component: Four0FourPage        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
