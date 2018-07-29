
import { NgReduxTestingModule } from '@angular-redux/store/testing';
import { TestBed } from '@angular/core/testing';
import { MainActions } from './main.actions';
import { MainFactory, } from './main.state';


describe('MainActions', () => {

    let actions: MainActions;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ ],
            imports: [
                NgReduxTestingModule,
            ]
        });
        actions = TestBed.get(MainActions);
    });

    it('should be created', () => {
        expect(actions).toBeTruthy();
    });
