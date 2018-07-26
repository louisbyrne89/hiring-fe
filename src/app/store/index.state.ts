import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';

export interface IAppState {
  router: string;
}

const INITIAL_APP_STATE: IAppState = {
  router: ''
};

export const AppFactory = makeTypedFactory<IAppState, IAppStateRecord>(INITIAL_APP_STATE);

export interface IAppStateRecord extends TypedRecord<IAppStateRecord>, IAppState { }
