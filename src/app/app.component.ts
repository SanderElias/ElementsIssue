import { Component, inject, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyElementComponent } from './my-element/my-element.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Elements Issue</h1>
  <p>This showcases the issue where the elements are not rendering their inputs correctly.</p> 
  <p>When you click the button 4 times, seek the last "showing" going to none, instead of what it should be</p>

  <button (click)="toggle=!toggle">{{toggle?'hide':'show'}}</button>

  <h2>Without content projection</h2>

  <ng-container *ngIf="toggle">
    <app-my-element icon="star"></app-my-element>
    <my-element icon="star"></my-element>
  </ng-container>
  
  <app-holder [show]="toggle">
    <app-my-element icon="question-mark"></app-my-element>
    <my-element icon="question-mark"></my-element>
  </app-holder>

  `,
  styles: []
})
export class AppComponent {
  toggle = true;

}
