import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IEvent } from './../../Interfaces/event.interface';
import { EventsService } from './../events.service';

@Component({
    selector: 'app-events',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.html']
})

export class EventComponent implements OnInit {
    title: String = 'Event List Component';
    addEventsDisplay: Boolean = true;
    eventsList: Array<IEvent> = [];
    inverse: Boolean = false;
    constructor(private eventsService: EventsService) { }
    ngOnInit(): void {
        this.eventsService.eventListStream$.subscribe(data => {
            this.eventsList = data;
            this.addEventsDisplay = false;
        });
    }
    setEvents() {
        this.eventsService.setEvents();
    }

    // Clear the event list and set the addDisplay to true again
    clearEvents(): void {
        this.eventsList = [];
        this.addEventsDisplay = true;
    }

    sortBy(): void {
        this.inverse = !this.inverse;
    }
}
