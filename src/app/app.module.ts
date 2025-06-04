// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Módulos PrimeNG
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';

// Seus módulos de aplicação
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CollectionModule } from './collections/collection.module';
import { ProjectModule } from './projects/project.module';
import { AuthModule } from './auth/auth.module';
import { RouterOutlet } from '@angular/router';

// IMPORTE ESTAS LINHAS DIRETAMENTE NO APP.MODULE.TS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // Mantenha aqui
    ReactiveFormsModule, // Mantenha aqui
    RouterOutlet,

    // Módulos PrimeNG
    ButtonModule,
    DropdownModule,
    MenuModule,
    SidebarModule,
    PanelModule,
    PanelMenuModule,

    // Seus Módulos de Recurso
    SharedModule,
    CollectionModule,
    ProjectModule,
    AuthModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule { }