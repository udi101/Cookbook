import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { EventComponent } from './event.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'List', component: EventComponent }
        ])
    ],
    exports: [],
    declarations: [EventComponent],
    providers: []
})
export class EventModule { }
