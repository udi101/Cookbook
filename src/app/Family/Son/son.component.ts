import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-son',
    templateUrl: './son.component.html',
    styleUrls: ['./son.component.css']
})
export class SonComonent implements OnInit {
    @Output() sonEvent:EventEmitter<string> = new EventEmitter<string>();
    ngOnInit(){
    }
    emitMe(){
        this.sonEvent.emit('Udi Mazor');
        console.log('test');
    }
}