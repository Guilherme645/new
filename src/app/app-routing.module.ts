import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importe seus componentes de página
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './auth/password/pages/forgot-password-page/forgot-password-page.component';
import { NewPasswordPageComponent } from './auth/password/pages/new-password-page/new-password-page.component';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { ProjectsPageComponent } from './projects/pages/projects-page/projects-page.component';
import { ColectionPageComponent } from './collections/pages/colection-page/colection-page.component'; // Mantendo o nome original do seu import
import { CreateProjectCollectionComponent } from './shared/components/create-project-collection/create-project-collection.component';
import { PageCreateColectionComponent } from './collections/pages/page-create-colection/page-create-colection.component';
import { PageCreateProjectComponent } from './projects/pages/page-create-project/page-create-project.component';

// --- IMPORTANTE: Importe o CreateProjectCollectionComponent ---
// Este é o componente PAI reutilizável que contém app-card, app-header-create e app-form-create.
// Certifique-se de que o caminho para este componente esteja correto.

// Componentes específicos de criação (se você decidir não os usar mais, pode remover os imports e rotas)
// import { PageCreateProjectComponent } from './projects/pages/page-create-project/page-create-project.component';
// import { PageCreateColectionComponent } from './collections/pages/page-create-colection/page-create-colection.component'; // "Colection"

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'esqueceu-a-senha', component: ForgotPasswordPageComponent },
  { path: 'recuperar-a-senha', component: NewPasswordPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },

  // Rotas para listar entidades
  { path: 'projetos', component: ProjectsPageComponent }, // Rota para listar projetos (ex: /projetos)
  { path: 'colecoes', component: ColectionPageComponent }, // Rota para listar coleções (ex: /colecoes)

  // --- ROTAS DE CRIAÇÃO REUTILIZÁVEIS ---
  // Estas rotas são as que o botão "Novo" no HeaderPageComponent irá chamar.
  {
    path: 'projetos/criar', // Corresponde ao createLink em HeaderPageComponent para type='project'
    component: CreateProjectCollectionComponent, // Usa o componente PAI reutilizável
    data: { entityType: 'project' } // Informa ao componente que é para criar um projeto
  },
  {
    path: 'colecoes/criar', // Corresponde ao createLink em HeaderPageComponent para type='collection'
    component: CreateProjectCollectionComponent, // Usa o componente PAI reutilizável
    data: { entityType: 'collection' } // Informa ao componente que é para criar uma coleção
  },

    { path: 'nova-colecao', component: PageCreateColectionComponent },
  { path: 'novo-projeto', component: PageCreateProjectComponent },

  // Suas rotas antigas de criação - revise se ainda são necessárias ou se foram substituídas
  // A rota 'novo-projeto' apontava para um PageCreateProjectComponent específico.
  // Se a funcionalidade agora é coberta por 'projetos/criar' com CreateProjectCollectionComponent,
  // você pode remover esta rota ou PageCreateProjectComponent.
  // { path: 'novo-projeto', component: PageCreateProjectComponent },

  // A rota 'nova-colecao' apontava para PageCreateColectionComponent específico.
  // Similarmente, avalie se é substituída por 'colecoes/criar'.
  // { path: 'nova-colecao', component: PageCreateColectionComponent },

  // As rotas 'criar-projeto' duplicadas e apontando para PageCreateCollectionComponent (que pode ser um nome antigo
  // do seu componente reutilizável ou outro componente) foram removidas em favor da estrutura acima.
  // Se 'PageCreateCollectionComponent' (com 'll') era o seu componente reutilizável,
  // certifique-se que o import de 'CreateProjectCollectionComponent' acima aponta para ele.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}