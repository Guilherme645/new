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
import { ListItemComponent } from './components/list-item/list-item.component';
import { HeaderCreateComponent } from './components/hearder-create/header-create.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { CreateProjectCollectionComponent } from './components/create-project-collection/create-project-collection.component';


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
    ListItemComponent,
    HeaderCreateComponent,
    BreadcrumbComponent,
    FormCreateComponent,
    CreateProjectCollectionComponent
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
    CollectionTreeComponent,
    ListItemComponent,
    HeaderCreateComponent,
    BreadcrumbComponent,
    FormCreateComponent,
    CreateProjectCollectionComponent
  ]
})
export class SharedModule { }