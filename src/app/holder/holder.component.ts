import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-holder',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>With content projection</h2>
  <ng-container *ngIf="show">
    <ng-content></ng-content>
  </ng-container>
  `,
  styles: [
  ]
})
export class HolderComponent {
  @Input() show = true;
}
