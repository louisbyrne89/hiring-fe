import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MainComponent } from './main/main.component';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainActions } from './main/main.actions';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DownloadService } from './download.service';
import { PanelModule } from 'primeng/panel';


@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    DialogModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    ButtonModule,
    CardModule,
    PanelModule
  ],
  declarations: [FileUploadComponent, MainComponent, VisualisationComponent],
  providers: [MainActions, DownloadService]
})
export class WorkflowModule { }
