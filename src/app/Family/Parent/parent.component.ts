import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    title: String = "Parent Component";
    sonTitle:string = 'DR650';

    sonEmiter(tr: string) {
        this.title = tr;
    }
    
    changeSon(_title: string) {
        this.sonTitle = _title;
    }
}
