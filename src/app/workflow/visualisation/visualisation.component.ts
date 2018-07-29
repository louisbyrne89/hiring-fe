import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { MainActions } from '../main/main.actions';

import { IMainStateRecord, IEdgesStateRecord } from '../main/main.state';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.css']
})
export class VisualisationComponent implements OnInit {
  @select(['main']) workflowObs: Observable<IMainStateRecord>;
  data: TreeNode[];
  source: string;
  sink: string;
  constructor(
    private mainActions: MainActions
  ) { }

  private createDataTree(nodes, edges) {
    // Converts nodes and edges into a data tree
    let tree: any;
    edges.reverse().forEach((edge: any) => {
      const node = nodes.get(edge['source']);
      const target = nodes.get(edge['target']);
      if (tree === undefined) {
        tree = [{
          label: node.title,
          expanded: true,
          type: 'person',
          data: {
            id: node.id,
            config: node.config,
          },
          children: [{
            label: target.title,
            expanded: true,
            type: 'person',
            data: {
              id: target.id,
              config: target.config,
            },
            children: []
          }]
        }]
      } else {
          tree = [{
            label: node.title,
            expanded: true,
            type: 'person',
            data: {
              id: node.id,
              config: node.config,
            },
            children: tree
          }]
      } 
    });
    return tree
  }    
  ngOnInit() {
    // Subscribe to the store, if the workflow is added, then create a data tree
    this.workflowObs.subscribe((workflow: IMainStateRecord): void => {
      this.data = this.createDataTree(workflow["nodes"], workflow["edges"]);
      this.source = workflow.source;
      this.sink = workflow.sink;
    });
  }
  public deleteNode(id: string): void {
    this.mainActions.deleteNode(id)
  }

}
