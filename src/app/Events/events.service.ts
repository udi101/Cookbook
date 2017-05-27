import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IEvent } from './../Interfaces/event.interface';
const CEvents: Array<IEvent> = [
    {
        eventName: 'Graduway',
        eventPrice: 50,
        startDate: new Date(2015, 1, 20, 18, 30),
        endDate: new Date(2015, 2, 20, 19)
    },
    {
        eventName: 'Migdal',
        eventPrice: 34,
        startDate: new Date('2017-05-04 18:00'),
        endDate: new Date('2017-05-04 18:30')
    },
    {
        eventName: 'Harel',
        eventPrice: 30,
        startDate: new Date('2017-05-12 19:00'),
        endDate: new Date('2017-05-12 20:30')
    }
];

@Injectable()
export class EventsService {
    private eventList = new Subject<Array<IEvent>>();
    eventListStream$ = this.eventList.asObservable();

    constructor() {
    }
    setEvents() {
        (function(x){
            setTimeout(function() {
                x.next(CEvents);
            }, 1000);
        })(this.eventList);
    }

}

