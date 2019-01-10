import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepatmentListComponent } from './depatment-list/depatment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SellsListComponent } from './sells-list/sells-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepatmentListComponent,
    EmployeeListComponent,
    routingComponents,
    PageNotFoundComponent,
    SellsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
