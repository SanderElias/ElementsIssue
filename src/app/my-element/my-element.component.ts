import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-element',
  standalone: true,
  imports: [CommonModule],
  template: `<svg>
    <use attr.xlink:href="#{{icon}}"></use>
  </svg>
  <span>Showing: {{icon}}</span>
  `
  ,
  styles: [`
  :host {
    display: flex;
    gap: .5rem;
  }
  span {
    font-weight: bold;
    background-color: yellow;

    
  }
  `]
})
export class MyElementComponent {
  @Input() icon= "none";

}

