// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importante para as animações do PrimeNG
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
import { AuthModule } from './auth/auth.module'; // Verifique se este módulo existe e está correto
import { RouterOutlet } from '@angular/router';

// ADICIONE ESTA LINHA:
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Faltando!

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,             
    ReactiveFormsModule,
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