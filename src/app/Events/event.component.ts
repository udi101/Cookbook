import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-events',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.html']
})
export class EventComponent implements OnInit {
    title: string;
    ngOnInit(): void {
        this.title = 'Event List Component';
    }
}
