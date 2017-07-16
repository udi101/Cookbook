import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { IEvent } from './../../Interfaces/event.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './../events.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-events',
    templateUrl: './event.component.html'
})

export class EventComponent implements OnInit, OnDestroy {
    title: String = 'Event List Component';
    addEventsDisplay: Boolean = true;
    name: string;
    subscription: Subscription;
    eventsList: Array<IEvent> = [];
    inverse: Boolean = false;
    @ViewChild('priceTitle') el: ElementRef;    // use view child to set td elementRef to Orange color

    constructor(private eventsService: EventsService,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.el.nativeElement.style.color = 'green';
        // const element: HTMLElement = this.el.nativeElement;
        // element.style.color = 'orange';
        this.subscription = this.eventsService.eventListStream$.subscribe(data => {
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
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
