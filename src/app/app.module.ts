import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ButtonModule,SelectButtonModule,DataTableModule,ListboxModule,TabViewModule,DropdownModule} from 'primeng/primeng';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import {Report1} from './report1/report1.component';
import {Report2} from './report2/report2.component';
import {DataView} from './dataview/dataview.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ButtonModule,SelectButtonModule,DataTableModule,ListboxModule,TabViewModule,
    MdButtonModule, MdCheckboxModule,DropdownModule,

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Report1,Report2,DataView,
    
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
