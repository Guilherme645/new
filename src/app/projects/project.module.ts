import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PageCreateProjectComponent } from './pages/page-create-project/page-create-project.component';
import { CreateNewProjectComponent } from './components/create-new-project/create-new-project.component'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,    
    SharedModule    
  ],
  declarations: [
    ProjectsPageComponent,
    PageCreateProjectComponent,
    CreateNewProjectComponent 
  ]
})
export class ProjectModule { }