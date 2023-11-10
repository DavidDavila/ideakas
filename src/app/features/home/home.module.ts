import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { MenuComponent } from '../../core/components/menu/menu.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, TitleComponent],
  declarations: [HomeComponent, MenuComponent, HeaderComponent],
})
export class HomeModule {}
