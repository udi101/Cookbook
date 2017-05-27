import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { EventComponent } from './List/event.component';
import { AddEventComponent } from './Add/addEvent.component';

// pipes
import { SortEventPipe } from './pipes/sortEvent.pipe';
import { FilterEventPipe } from './pipes/filterEvent.pipe';

// Services
import { EventsService } from './events.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'List', component: EventComponent },
            { path: 'Add', component: AddEventComponent }
        ])
    ],
    exports: [],
    declarations: [EventComponent, AddEventComponent, SortEventPipe, FilterEventPipe],
    providers: [EventsService]
})
export class EventModule { }
