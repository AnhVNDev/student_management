import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-modal',
  template: `
    <div class="modal-body">
      <img [src]="imageUrl" (click)="activeModal.close()" />
    </div>
  `,
  styles: [`
    .modal-body {
      text-align: center;
    }
    img {
      max-width: 100%;
      max-height: 90vh;
      cursor: pointer;
    }
  `]
})
export class ImageModalComponent {
  @Input() imageUrl?: string;

  constructor(public activeModal: NgbActiveModal) { }
}
