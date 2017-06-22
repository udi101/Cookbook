import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ICounterState } from './ICounterState';
import { reducer, INITIAL_STATE, CounterActions } from './store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent implements OnInit, OnDestroy {
  @select() counter$: Observable<number>;
  @select() name$: Observable<string>;
  subscription: Subscription;
  counter: number;
  constructor(private ngRedux: NgRedux<ICounterState>, private actions: CounterActions) { }

  ngOnInit() {
    this.ngRedux.configureStore(reducer, INITIAL_STATE);
    this.subscription = this.ngRedux.select<number>('counter').subscribe(data => this.counter = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

  increase(): void {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrease(): void {
    this.ngRedux.dispatch(this.actions.decrement());
  }

}
