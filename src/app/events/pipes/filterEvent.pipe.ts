import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from './../../Interfaces/event.interface';

@Pipe({
    name: 'filterEvent'
})

export class FilterEventPipe implements PipeTransform {
    transform(_events: IEvent[]): IEvent[] {
        return _events.filter(x => x.eventName.includes('l'));
    }
}
