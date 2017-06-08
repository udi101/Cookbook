import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-wellContainer',
    templateUrl: './wellContainer.component.html',
    styleUrls: ['./wellContainer.component.css']
})
export class WellContainerComponent implements OnInit {
    displayEventBody: Boolean = true;
    ngOnInit() { }


    // Show/Hide the event body
    toggleEventBody(): void {
        this.displayEventBody = !this.displayEventBody;
    }
}
