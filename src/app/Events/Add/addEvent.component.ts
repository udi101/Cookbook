import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
    templateUrl: './addEvent.component.html'
})
export class AddEventComponent implements OnInit {
    title: string;
    ngOnInit() {
        this.title = 'Add Event Component';
    }
}
