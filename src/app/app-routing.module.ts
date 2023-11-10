import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { SignUpModule } from './features/sign-up/sign-up.module';
import { WelcomeComponent } from './features/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-up', loadChildren: () => SignUpModule },
  { path: 'home', loadChildren: () => HomeModule },
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
