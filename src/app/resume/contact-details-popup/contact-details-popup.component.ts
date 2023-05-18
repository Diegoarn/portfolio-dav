import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details-popup',
  templateUrl: './contact-details-popup.component.html',
  styleUrls: ['./contact-details-popup.component.css'],
})
export class ContactDetailsPopupComponent {
  @Input() contact: any;
  isOpen = false;
  openPopup() {
    this.isOpen = true;
  }
  closePopup() {
    this.isOpen = false;
  }
}
