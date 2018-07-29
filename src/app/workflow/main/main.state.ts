import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';
import * as Immutable from 'immutable';


interface IEdgesState {
    source: string;
    target: string;
}

const Edges: IEdgesState = {
    source: null,
    target: null,
};

export const EdgesStateFactory = makeTypedFactory<IEdgesState, IEdgesStateRecord>(Edges);

export interface IEdgesStateRecord extends TypedRecord<IEdgesStateRecord>, IEdgesState { };


interface IConfigItemState {
    name: string;
    readOnly: string;
    value: string;
    visualType: string;
}

const ConfigItem: IConfigItemState = {
    name: null,
    readOnly: null,
    value: null,
    visualType: null,
};

export const ConfigItemStateFactory = makeTypedFactory<IConfigItemState, IConfigItemStateRecord>(ConfigItem);

export interface IConfigItemStateRecord extends TypedRecord<IConfigItemStateRecord>, IConfigItemState { };


interface INodesState {
    title: string;
    config: Immutable.Map<string, IConfigItemStateRecord>;
    id: string;
    type: string;

}

const Nodes: INodesState = {
    title: null,
    config: Immutable.Map(),
    id: null,
    type: null,
};

export const NodesStateFactory = makeTypedFactory<INodesState, INodesStateRecord>(Nodes);

export interface INodesStateRecord extends TypedRecord<INodesStateRecord>, INodesState { };


interface IMainState {
    name: string;
    description: string;
    edges: Immutable.List<IEdgesStateRecord>;
    // events: Immutable.List<IEventsState>;
    nodes: Immutable.Map<string, INodesStateRecord>;
    source: string;
    sink: string;
    loaded: boolean;
    modified: boolean;
}

const Main: IMainState = {
    name: null,
    description: null,
    edges: Immutable.List(),
    nodes: Immutable.Map(),
    source: null,
    sink: null,
    loaded: false,
    modified: false,
};

export const MainStateFactory = makeTypedFactory<IMainState, IMainStateRecord>(Main);

export interface IMainStateRecord extends TypedRecord<IMainStateRecord>, IMainState { };
