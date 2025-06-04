// src/app/collections/collection.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ColectionPageComponent } from './pages/colection-page/colection-page.component';
import { PageCreateColectionComponent } from './pages/page-create-colection/page-create-colection.component';
import { CreateNewColectionComponent } from './components/create-new-colection/create-new-colection.component';

import { SharedModule } from '../shared/shared.module';
import { PageCreateCollectionComponent } from './pages/page-create-collection/page-create-collection.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule 
  ],
  declarations: [
    ColectionPageComponent,
    PageCreateColectionComponent,
    CreateNewColectionComponent,
    PageCreateCollectionComponent
  ],
  exports: [
  ]
})
export class CollectionModule { }