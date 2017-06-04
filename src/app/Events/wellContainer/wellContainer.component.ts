import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-wellContainer',
    templateUrl: './wellContainer.component.html',
    styleUrls: ['./wellContainer.component.css']
})
export class WellContainerComponent implements OnInit {

    ngOnInit() { }
    displayEventBody:Boolean = true;
    
    // Show/Hide the event body
    toggleEventBody():void{
        this.displayEventBody = !this.displayEventBody;
    }
}
