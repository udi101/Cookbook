import { Component, OnInit } from '@angular/core';
import { FamilyService } from './../family.service';
@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    private _familyValue: string;

    constructor(private familyServie: FamilyService) { }
    ngOnInit() {
        this.familyServie.famliyValue$.subscribe(data => this._familyValue = data);
    }
    changeValue(_value: string) {
        this.familyServie.setValue(_value);
    }
}
