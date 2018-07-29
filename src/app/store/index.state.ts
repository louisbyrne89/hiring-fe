import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';
import { IMainStateRecord, MainStateFactory } from '../workflow/main/main.state';

export interface IAppState {
  main: IMainStateRecord;
}

const INITIAL_APP_STATE: IAppState = {
  main: MainStateFactory()
};

export const AppFactory = makeTypedFactory<IAppState, IAppStateRecord>(INITIAL_APP_STATE);

export interface IAppStateRecord extends TypedRecord<IAppStateRecord>, IAppState { }
