import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkflowModule } from './workflow/workflow.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    NgReduxModule,
    AppRoutingModule,
    WorkflowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
