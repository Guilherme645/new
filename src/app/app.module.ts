import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TabelaComponent } from './components/side-bar/tabela/tabela.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PageCreateProjectComponent } from './pages/page-create-project/page-create-project.component';
import { CreateNewProjectComponent } from './components/create-new-project/create-new-project.component';
import { RouterOutlet } from '@angular/router';
import { HeaderColectionComponent } from './components/header-colection/header-colection.component';
import { CreateNewColectionComponent } from './components/create-new-colection/create-new-colection.component';
import { ColectionPageComponent } from './pages/colection-page/colection-page.component';
import { PageCreateColectionComponent } from './pages/page-create-colection/page-create-colection.component';


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
    PageCreateColectionComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
