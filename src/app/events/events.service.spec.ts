import { EventsService } from './events.service';
import { IEvent } from './../Interfaces/event.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

describe('Event Service Tests', () => {
    let eventService: EventsService, mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
        eventService = new EventsService(mockHttp);
    });

    describe('http Get tests', () => {
        it('should send get to tight uri', () => {
            mockHttp.get.and.returnValue(Observable.of('value'));
            eventService.getEvents();
            expect(mockHttp.get).toHaveBeenCalledWith('./../assets/events.json', jasmine.any(Object));
        });
    });

});