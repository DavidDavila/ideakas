import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/const/routes.const';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: ROUTES[0].path, pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: ROUTES.map(({ path, loadChildren }) => ({ path, loadChildren })),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
