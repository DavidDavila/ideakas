import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MentorshipsComponent } from './mentorships.component';

import { MentorshipsRoutingModule } from './mentorships-routing.module';

@NgModule({
  imports: [CommonModule, MentorshipsRoutingModule],
  declarations: [MentorshipsComponent],
})
export class MentorshipsModule {}
