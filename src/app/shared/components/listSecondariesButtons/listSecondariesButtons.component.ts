import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListSecondariesButtonsTypes } from './types/list-secondaries-buttons.types';

@Component({
  selector: 'app-list-secondaries-buttons',
  templateUrl: './listSecondariesButtons.component.html',
  styleUrls: ['./listSecondariesButtons.component.scss'],
})
export class ListSecondariesButtonsComponent {
  @Input() buttons!: ListSecondariesButtonsTypes[];
  @Output() onButtonClicked = new EventEmitter<number>();
  buttonClicked(title: string) {
    const index = this.buttons.findIndex(
      (button) => button.title === title
    ) as number;
    this.onButtonClicked.emit(index);
  }
}
