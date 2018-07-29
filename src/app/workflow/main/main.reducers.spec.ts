import { TestBed } from '@angular/core/testing';

import { rootReducer } from '../../store/index.reducers';
import { AppFactory } from '../../store/index.state';

describe('MainReducers', () => {
  const state1 = AppStateFactory();
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
});
