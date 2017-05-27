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
    eventsList: Array<IEvent> = [];
    constructor(private eventsService: EventsService) { }
    ngOnInit(): void {
        this.eventsService.eventListStream$.subscribe(data => this.eventsList = data);
    }
    setEvents() {
        this.eventsService.setEvents();
    }
}
