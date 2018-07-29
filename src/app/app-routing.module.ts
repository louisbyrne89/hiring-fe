import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './workflow/file-upload/file-upload.component';
import { MainComponent } from './workflow/main/main.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
