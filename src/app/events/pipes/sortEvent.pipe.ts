import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from './../../Interfaces/event.interface';
@Pipe({
    name: 'sortEvent'
})

export class SortEventPipe implements PipeTransform {
    transform(_events: Array<IEvent>): any {
        return _events;
    }
}
