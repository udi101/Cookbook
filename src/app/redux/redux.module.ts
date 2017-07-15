
// npm install --save redux @angular-redux/store

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';

// Components
import { CounterComponent } from './counter/counter.component';

// Services
import { CounterActions } from './counter/store';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    RouterModule.forChild([
      { path: '', component: CounterComponent }
    ])
  ],
  declarations: [CounterComponent],
  providers: [CounterActions]
})
export class ReduxModule { }
