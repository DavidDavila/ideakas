import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent {
  @Output('onCloseSideBar') onCloseSideBar = new EventEmitter();
  @ViewChild('sidebar') el!: ElementRef;

  closeSlide() {
    this.onCloseSideBar.emit();
  }
  checkIfClose($event: MouseEvent) {
    !this.el.nativeElement.contains($event?.target) && this.closeSlide();
  }
}
