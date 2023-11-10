import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorshipsComponent } from './mentorships.component';

const routes: Routes = [{ path: '', component: MentorshipsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorshipsRoutingModule {}
