import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // Observables used for title and description, and to control display/status of elements
  @select(["main", "name"]) workflowNameObs: Observable<string>;
  @select(["main", "description"]) workflowDescriptionObs: Observable<string>;
  @select(["main", "loaded"]) workflowLoadedObs: Observable<string>;
  @select(["main", "modified"]) workflowModifiedObs: Observable<string>;
  constructor() { }

  ngOnInit() {
  }

  download() {
    
  }



}
