import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepatmentListComponent} from "./depatment-list/depatment-list.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SellsListComponent} from "./sells-list/sells-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/department',pathMatch: 'full'},
  {path: 'department', component: DepatmentListComponent},
  {path: 'sell', component: SellsListComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepatmentListComponent,SellsListComponent, EmployeeListComponent, PageNotFoundComponent]
