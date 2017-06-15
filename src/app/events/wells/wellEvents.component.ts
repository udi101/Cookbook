import { Component, OnInit } from '@angular/core';
import { EventsService } from './../events.service';
import { IEvent } from './../../Interfaces/event.interface';
@Component({
    templateUrl: './wellEvents.component.html',
    styleUrls: ['./wellEvents.component.css']
})
export class WellEventComponent implements OnInit {
    _events: Array<IEvent> = [];
    constructor(private eventsService: EventsService) { }
    ngOnInit() {
        this.eventsService.getEvents().subscribe(data => this._events = data);
    }
}
