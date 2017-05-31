import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from './../../Interfaces/event.interface';
@Pipe({
    name: 'sortEvent'
})

export class SortEventPipe implements PipeTransform {
    transform(_events: Array<IEvent>, _inverse: Boolean): Array<IEvent> {
        if (_events.length === 0) {
            return _events;
        }
        return _events.sort(function (a: IEvent, b: IEvent): number {
            let front: number;
            front = _inverse ? 1 : -1;
            return (a.eventName > b.eventName ? front : a.eventName < b.eventName ? -front : 0);
        });
    }
}
