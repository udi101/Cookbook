import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventsService } from './events.service';
import { IEvent } from './../Interfaces/event.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventResolver implements Resolve<IEvent[]> {
    constructor(private eventsService: EventsService) { }
    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): Observable<Array<IEvent>> {
        return this.eventsService.getEvents();
    }
}
