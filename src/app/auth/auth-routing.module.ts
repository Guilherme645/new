import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WithoutTokenGuard } from 'src/app/core/guard/without-token.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
     children: [
      { path: 'login',component: LoginPageComponent,canActivate: [WithoutTokenGuard]},
      {path: '',redirectTo: 'login',pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
