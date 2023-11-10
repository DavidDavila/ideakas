import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworkComponent } from './network.component';

import { NetworkRoutingModule } from './network-routing.module';

@NgModule({
  imports: [CommonModule, NetworkRoutingModule],
  declarations: [NetworkComponent],
})
export class NetworkModule {}
