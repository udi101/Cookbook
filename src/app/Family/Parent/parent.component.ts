import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent {
    title: String = "Parent Component";

    sonEmiter(tr:string){
        this.title = tr;
    }
}
