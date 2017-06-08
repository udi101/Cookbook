import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
    selector: 'app-son',
    templateUrl: './son.component.html',
    styleUrls: ['./son.component.css']
})
export class SonComonent {
    @Output() sonEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() title: string;


    sonClick(sonTitle: string) {
        this.sonEvent.emit(sonTitle);
    }
}
