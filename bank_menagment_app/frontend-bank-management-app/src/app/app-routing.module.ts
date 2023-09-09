import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';

// Defining our application's routes
const routes: Routes = [
  { path: '', redirectTo: 'operations', pathMatch: 'full' }, // Default route
  { path: 'operations', component: OperationListComponent },  // Route for viewing operations
  { path: 'perform-operation', component: OperationFormComponent }, // Route for performing operations
  { path: '**', redirectTo: 'operations' }  // Fallback route in case path doesn't match any defined route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

