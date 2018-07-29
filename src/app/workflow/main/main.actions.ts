import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import * as Immutable from 'immutable';

import {
  EdgesStateFactory,
  IEdgesStateRecord,
  NodesStateFactory,
  INodesStateRecord,
  IConfigItemStateRecord,
  ConfigItemStateFactory
} from './main.state';
import { IAppStateRecord } from '../../store/index.state';
import { NumberSymbol } from '@angular/common';

@Injectable()
export class MainActions {
  static RESET = 'main/RESET';
  static UPDATE_WORKFLOW =  'main/UPDATE_WORKFLOW';
  static DELETE_NODE =  'main/DELETE_NODE';
  constructor(
    private store: NgRedux<IAppStateRecord>,
  ) { }

  public loadFile(workflow: any): void {
    const edges = this.createEdges(workflow["edges"]);
    const nodes = this.createNodes(workflow["nodes"]);
    const source = edges.getIn([0, "source"]);
    const sink = edges.getIn([edges.size -1, "target"]);

    this.store.dispatch({
      type:MainActions.UPDATE_WORKFLOW,
      payload: {
        name: workflow["name"],
        description: workflow["description"],
        edges: edges,
        nodes: nodes,
        source: source,
        sink: sink
      } 
    });
  }

  private createEdges(edges: Array<{[key: string]: string}>): Immutable.List<IEdgesStateRecord> {
    // Creates immutable list of edges from json object
    return Immutable.List(
      edges
      .map((item: {[key: string]: string}): IEdgesStateRecord => {
        return EdgesStateFactory({
          source: item["source"],
          target: item["target"]
        });
      })
    );
  }

  private createNodes(nodes:Array<{[key: string]: any}>):  Immutable.Map<string, INodesStateRecord> {
    // Creates immutable map of nodes from json object
    let nodesMap: Immutable.Map<string, INodesStateRecord> = Immutable.Map();
    nodes
    .forEach((item: {[key: string]: any}): void => {
      let configMap: Immutable.Map<string, IConfigItemStateRecord> = Immutable.Map();
      Object.keys(item["config"])
      .forEach((key: string): void => {
        const configItem = item["config"][key]
        configMap = configMap.set(
          key, ConfigItemStateFactory({
            name: configItem.name,
            readOnly: configItem.readOnly,
            value: configItem.value,
            visualType: configItem.visualType
          })
        );
      });
      nodesMap = nodesMap.set(item.id, 
        NodesStateFactory({
          title: item["title"],
          id: item["id"],
          config: configMap,
          type: item["type"]   
        })
      )
    })
    return nodesMap;
  }

  public deleteNode(id: string): void {
    // Deletes node from node list and updates edges
    let sourceIdx: number;
    let targetIdx: number;
    let edges = this.store.getState().getIn(["main", "edges"]);
    edges.forEach((edge: IEdgesStateRecord, idx: number): void => {
      if (edge["source"] === id) {
        sourceIdx = idx;
      } else if (edge["target"] === id) {
        targetIdx = idx;
      };
    });
    edges = edges.setIn([targetIdx, "target"], edges.getIn([sourceIdx, "target"]));
    edges = edges.delete(sourceIdx);

    this.store.dispatch({
      type:MainActions.DELETE_NODE,
      payload: {
        id: id,
        edges: edges
      }
    });
  }

}
