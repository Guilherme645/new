import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateProjectComponent } from './pages/page-create-project/page-create-project.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ColectionPageComponent } from './pages/colection-page/colection-page.component';
import { PageCreateColectionComponent } from './pages/page-create-colection/page-create-colection.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'tabela-projetos', component: ProjectsPageComponent }, 
  { path: 'novo-projeto', component: PageCreateProjectComponent }, 
    { path: 'nova-coleção', component: PageCreateColectionComponent  }, 
      { path: 'tabela-coleções', component: ColectionPageComponent }, 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
