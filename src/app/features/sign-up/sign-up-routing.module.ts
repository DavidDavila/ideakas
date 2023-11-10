import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './components/role/role.component';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    children: [
      {
        path: '',
        component: RoleComponent,
      },
      {
        path: 'creator',
        loadChildren: () =>
          import('./components/creator/creator.module').then(
            (m) => m.CreatorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
