import { Component, OnInit } from '@angular/core';
import { MainActions } from '../main/main.actions';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  constructor(
    private mainActions: MainActions
  ) { }

  ngOnInit() {
  }

  onUpload(event: any): void {
    const reader = new FileReader();
    const data = new Subject();
    reader.onload = function(e) {
      data.next(JSON.parse(reader.result));
      data.unsubscribe();
    }
    data.subscribe(data => this.mainActions.loadFile(data))
    reader.readAsText(event.files[0]);
  }

}
