import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IEvent } from './../../Interfaces/event.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './../events.service';

@Component({
    selector: 'app-events',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.html']
})

export class EventComponent implements OnInit {
    title: String = 'Event List Component';
    addEventsDisplay: Boolean = true;
    name: string;
    eventsList: Array<IEvent> = [];
    inverse: Boolean = false;

    constructor(private eventsService: EventsService,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.eventsService.eventListStream$.subscribe(data => {
            this.eventsList = data;
            this.addEventsDisplay = false;
        });

        // == If we use the snapshot then the component will not be initialized,
        // == there for we will user the params.sunscribe!
        // == paramMAp.get('id') is angular's 4 version for params['id']

        //  this.name = this.activatedRoute.snapshot.paramMap.get('id');

        this.activatedRoute.paramMap.subscribe(params => {
            this.name = params.get('name');
            console.log('this is: ' + this.name);
        });
    }

    // Get the events from the Service
    setEvents() {
        this.eventsService.setEvents();
    }


    selectEvent(eventName: string): void {
        this.router.navigate(['/Events', 'List', eventName]);
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
