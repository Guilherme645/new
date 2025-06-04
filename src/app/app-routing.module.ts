import { NgModule } from '@angular/core';
import { PageCreateProjectComponent } from './projects/pages/page-create-project/page-create-project.component';
import { ProjectsPageComponent } from './projects/pages/projects-page/projects-page.component';
import { ColectionPageComponent } from './collections/pages/colection-page/colection-page.component';
import { PageCreateColectionComponent } from './collections/pages/page-create-colection/page-create-colection.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './auth/password/pages/forgot-password-page/forgot-password-page.component';
import { NewPasswordPageComponent } from './auth/password/pages/new-password-page/new-password-page.component';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { Routes, RouterModule } from '@angular/router';
import { PageCreateCollectionComponent } from './collections/pages/page-create-collection/page-create-collection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tabela-projetos', component: ProjectsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'esqueceu-a-senha', component: ForgotPasswordPageComponent },
  { path: 'recuperar-a-senha', component: NewPasswordPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },

  { path: 'novo-projeto', component: PageCreateProjectComponent },
    { path: 'criar-projeto', component: PageCreateCollectionComponent },
        { path: 'criar-projeto', component: PageCreateCollectionComponent },
  { path: 'nova-colecao', component: PageCreateColectionComponent },
  { path: 'tabela-coleções', component: ColectionPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
