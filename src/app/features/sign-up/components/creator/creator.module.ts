import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreatorComponent } from './creator.component';

import { ConfigCollaboratorsComponent } from 'src/app/shared/components/config-collaborators/config-collaborators.component';
import { SharedModule } from '../../../../shared/shared.module';
import { AddCollaboratorsComponent } from './add-collaborators/add-collaborators.component';
import { CreatorRoutingModule } from './creator-routing.module';
import { ImComponent } from './im/im.component';
import { NeedComponent } from './need/need.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CreatorRoutingModule,
    ConfigCollaboratorsComponent,
  ],
  declarations: [
    CreatorComponent,
    ImComponent,
    NeedComponent,
    AddCollaboratorsComponent,
  ],
})
export class CreatorModule {}
