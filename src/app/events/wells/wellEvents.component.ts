import { Component, OnInit } from '@angular/core';
import { EventsService } from './../events.service';
import { IEvent } from './../../Interfaces/event.interface';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';   // import of lodash
@Component({
    templateUrl: './wellEvents.component.html',
    styleUrls: ['./wellEvents.component.css']
})
export class WellEventComponent implements OnInit {
    _events: Array<IEvent> = [];
    constructor(private eventsService: EventsService, private route: ActivatedRoute) { }
    ngOnInit() {
        let tt: Array<any>;
        tt = _.compact([0, 1, false, 2, 3]);
        console.log('tt is: ' + tt);
        this.eventsService.getEvents().subscribe(data => this._events = data);
        console.log('the route is: ' + this.route.snapshot.params['id']);
    }
}
