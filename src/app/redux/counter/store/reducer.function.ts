import { Action, Reducer } from 'redux';
import { CounterActions } from './';
import { ICounterState } from './../ICounterState';

export const INITIAL_STATE: ICounterState = { counter: 0, name: 'udi' };

export const reducer: Reducer<ICounterState> = function (state: ICounterState = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case CounterActions.INCREASE:
            return { counter: state.counter + 1, name: 'incresed' };
        case CounterActions.DECREASE:
            return { counter: state.counter - 1, name: 'decreased' };
        default:
            return state;
    }
};
