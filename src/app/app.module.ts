import { CUSTOM_ELEMENTS_SCHEMA, inject, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolderComponent } from './holder/holder.component';
import { MyElementComponent } from './my-element/my-element.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyElementComponent,
    HolderComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  #inj = inject(Injector)

  constructor() {

    /** create my Angular element here. */
    const myElement = createCustomElement(MyElementComponent, { injector: this.#inj });
    customElements.define('my-element', myElement);

  }
}
 