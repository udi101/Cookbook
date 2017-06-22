import { Injectable } from '@angular/core';
import { Action } from 'redux';


@Injectable()
export class CounterActions {
    static INCREASE = 'increase';
    static DECREASE = 'decrease';

    increment(): Action {
        return { type: CounterActions.INCREASE };
    }

    decrement(): Action {
        return { type: CounterActions.DECREASE};
    }
}
