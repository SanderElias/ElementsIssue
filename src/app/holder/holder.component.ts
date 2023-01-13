import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holder',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>With content projection</h2>
  <div *ngIf="show">
    <ng-content></ng-content>
  </div>
  `,
  styles: [
  ]
})
export class HolderComponent {
  @Input() show = true;
}
