import { IActionPayload } from '../../store/index.actions';
import { IMainStateRecord, MainStateFactory } from './main.state'
import { MainActions } from './main.actions';

export function MainReducers(
  state: IMainStateRecord = MainStateFactory(),
  action: IActionPayload<any>
): IMainStateRecord {

  switch (action.type) {

    case MainActions.RESET:
      return MainStateFactory();
    case MainActions.UPDATE_WORKFLOW:
      return state
      .set("name", action.payload.name)
      .set("description", action.payload.description)
      .set("edges", action.payload.edges)
      .set("nodes", action.payload.nodes)
      .set("loaded", true)
      .set("source", action.payload.source)
      .set("sink", action.payload.sink)
    case MainActions.DELETE_NODE:
      return state
      .deleteIn(["nodes", action.payload.id])
      .set("edges", action.payload.edges)
      .set("modified", true)      
    default:
      return state;
  }
}