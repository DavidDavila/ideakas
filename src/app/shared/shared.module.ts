import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ListSecondariesButtonsComponent } from './components/listSecondariesButtons/listSecondariesButtons.component';
import { RolesComponent } from './components/roles/roles.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    DropdownComponent,
    ListSecondariesButtonsComponent,
    SideBarComponent,
    RolesComponent,
  ],
  declarations: [
    DropdownComponent,
    ListSecondariesButtonsComponent,
    SideBarComponent,
    RolesComponent,
  ],
  providers: [],
})
export class SharedModule {}
