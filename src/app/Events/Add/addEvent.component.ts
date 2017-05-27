import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './addEvent.component.html',
    styleUrls: ['./addEvent.component.css']
})
export class AddEventComponent implements OnInit {
    title: string;
    ngOnInit() {
        this.title = 'Add Event Component';
    }
}
