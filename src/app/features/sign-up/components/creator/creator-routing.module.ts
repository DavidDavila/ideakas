import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollaboratorsComponent } from './add-collaborators/add-collaborators.component';
import { CreatorComponent } from './creator.component';
import { ImComponent } from './im/im.component';
import { NeedComponent } from './need/need.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorComponent,
    children: [
      { path: '', component: ImComponent },
      { path: 'need', component: NeedComponent },
      { path: 'collaborators', component: AddCollaboratorsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatorRoutingModule {}
