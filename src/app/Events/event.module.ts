import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { EventComponent } from './List/event.component';
import { AddEventComponent } from './Add/addEvent.component';
import { WellEventComponent } from './wells/wellEvenst.component';
import { WellContainerComponent } from './wellContainer/wellContainer.component';

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
            { path: 'Add', component: AddEventComponent },
            { path: 'Wells', component: WellEventComponent }
        ])
    ],
    exports: [],
    declarations: [
        EventComponent,
         AddEventComponent,
          SortEventPipe,
           FilterEventPipe,
            WellEventComponent,
            WellContainerComponent
            ],
    providers: [EventsService]
})
export class EventModule { }
