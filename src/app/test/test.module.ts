import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { TestComponent } from './test.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'Test', component: TestComponent }
    ])
  ],
  declarations: [TestComponent]
})
export class TestModule { }
