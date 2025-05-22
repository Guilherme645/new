import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateProjectComponent } from './pages/page-create-project/page-create-project.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ColectionPageComponent } from './pages/colection-page/colection-page.component';
import { PageCreateColectionComponent } from './pages/page-create-colection/page-create-colection.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tabela-projetos', component: ProjectsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'esqueceu-a-senha', component: ForgotPasswordPageComponent },
  { path: 'recuperar-a-senha', component: NewPasswordPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },

  { path: 'novo-projeto', component: PageCreateProjectComponent },
  { path: 'nova-coleção', component: PageCreateColectionComponent },
  { path: 'tabela-coleções', component: ColectionPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
