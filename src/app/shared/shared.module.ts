// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

// Importações dos seus componentes compartilhados
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { OptionDropdownComponent } from './components/option-dropdown/option-dropdown.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ModalRemoveComponent } from './components/modal-remove/modal-remove.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CollectionTreeComponent } from '../collections/components/collection-tree/collection-tree.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, 
    ButtonModule,
      
  ],
   declarations: [
    ToastComponent,
    TooltipComponent,
    TabelaComponent,
    SideBarComponent,
    ProgressBarComponent,
    OptionDropdownComponent,
    NotificationCardComponent,
    NotificationComponent,
    ModalRemoveComponent,
    HeaderPageComponent,
    DropdownComponent,
    CollectionTreeComponent, 
  ],
  exports: [
    CommonModule,        
    FormsModule,
    ReactiveFormsModule,
    RouterModule,         
    ToastComponent,
    TooltipComponent,
    TabelaComponent,
    SideBarComponent,
    ProgressBarComponent,
    OptionDropdownComponent,
    NotificationCardComponent,
    NotificationComponent,
    ModalRemoveComponent,
    HeaderPageComponent,
    DropdownComponent,
    ButtonModule,
        CollectionTreeComponent 
          
  ]
})
export class SharedModule { }