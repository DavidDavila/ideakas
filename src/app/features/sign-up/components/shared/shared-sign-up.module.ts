import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSignUpComponent } from './header-sign-up/header-sign-up.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderSignUpComponent,
    
  ],
  exports: [
    HeaderSignUpComponent,
 
  ],
})
export class SharedSignUpModule {}
