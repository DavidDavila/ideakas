import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LinkedInButtonComponent } from './components/role/components/linkedInButton/linkedInButton.component';
import { RoleComponent } from './components/role/role.component';
import { SignUpService } from './services/sign-up.service';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    LinkedInButtonComponent,
    SharedModule,
  ],
  declarations: [SignUpComponent, RoleComponent],
  providers: [SignUpService],
})
export class SignUpModule {}
