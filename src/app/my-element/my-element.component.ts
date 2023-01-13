import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-element',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Showing <span>{{icon}}</span> </p>
  `,
  styles: [`
  span {
    font-weight: bold;
    background-color: yellow;
    
    
  }
  `]
})
export class MyElementComponent {
  @Input() icon= "none";

}

