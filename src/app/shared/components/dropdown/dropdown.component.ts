import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() multiSelect: boolean = false;
  @Input() options!: any[];
  @Input() defaultOption!: string;
  @Output() onOptionSelected = new EventEmitter<string>();
  @ViewChild('dropdown') el!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdown = this.el.nativeElement;
    if (dropdown && !dropdown.contains(target)) {
      this.show = false;
    }
  }
  show: boolean = false;
  optionSelected(option: string) {
    this.defaultOption = option;
    this.onOptionSelected.emit(option);
  }
}
