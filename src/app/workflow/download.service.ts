import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

 
  downloadFile(data: Response){
    const blob = new Blob([data], { type: 'text/json' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
