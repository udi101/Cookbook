import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { EventComponent } from './List/event.component';
import { AddEventComponent } from './Add/addEvent.component';
import { WellEventComponent } from './wells/wellEvents.component';
import { WellContainerComponent } from './wellContainer/wellContainer.component';

// pipes
import { SortEventPipe } from './pipes/sortEvent.pipe';
import { FilterEventPipe } from './pipes/filterEvent.pipe';

// Directives
import { MarkerDirective } from './marker/marker.directive';

// Services
import { EventsService } from './events.service';
import { EventResolver } from './event-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild([
            { path: 'List', component: EventComponent },
            { path: 'List/:name', component: EventComponent },
            { path: 'Add', component: AddEventComponent },
            { path: 'Wells', component: WellEventComponent, resolve: { eventsList: EventResolver  } },
            { path: 'Wells/:id', component: WellEventComponent }
        ])
    ],
    exports: [],
    declarations: [
        EventComponent,
        AddEventComponent,
        SortEventPipe,
        MarkerDirective,
        FilterEventPipe,
        WellEventComponent,
        WellContainerComponent
    ],
    providers: [EventsService, EventResolver]
})
export class EventModule { }
