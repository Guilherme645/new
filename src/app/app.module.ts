import { OptionDropdownComponent } from './components/option-dropdown/option-dropdown.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageCreateProjectComponent } from './pages/page-create-project/page-create-project.component';
import { CreateNewProjectComponent } from './components/create-new-project/create-new-project.component';
import { RouterOutlet } from '@angular/router';
import { HeaderColectionComponent } from './components/header-colection/header-colection.component';
import { CreateNewColectionComponent } from './components/create-new-colection/create-new-colection.component';
import { ColectionPageComponent } from './pages/colection-page/colection-page.component';
import { PageCreateColectionComponent } from './pages/page-create-colection/page-create-colection.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MenuModule } from 'primeng/menu';
import { CollectionTreeComponent } from './components/collection-tree/collection-tree.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { NewPasswordPageComponent } from './pages/new-password-page/new-password-page.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ModalRemoveComponent } from './components/modal-remove/modal-remove.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { ToastComponent } from './components/toast/toast.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TabelaComponent,
    ProjectsPageComponent,
    ProgressBarComponent,
    HeaderPageComponent,
    PageCreateProjectComponent,
    CreateNewProjectComponent,
    HeaderColectionComponent,
    CreateNewColectionComponent,
    ColectionPageComponent,
    PageCreateColectionComponent,
    DropdownComponent,
  CollectionTreeComponent,
  LoginComponent,
  LoginPageComponent,
  ForgotPasswordComponent,
  ForgotPasswordPageComponent,
  NewPasswordComponent,
  NewPasswordPageComponent,
  TooltipComponent,
  OptionDropdownComponent,
  ModalRemoveComponent,
  NotificationComponent,
  NotificationCardComponent,
  ToastComponent,
  DashboardPageComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    MenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
