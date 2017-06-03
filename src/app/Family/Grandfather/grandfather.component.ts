import { Component, OnInit } from '@angular/core';
import { FamilyService } from './../family.service';
@Component({
    selector: 'app-grandfather',
    templateUrl: './grandfather.component.html',
    styleUrls: ['./grandfather.component.css']
})
export class GrandfatherComponent implements OnInit {
    _familyValue: String;

    constructor(private familyService: FamilyService) { }

    ngOnInit() {
        this.familyService.famliyValue$.subscribe(data => this._familyValue = data);
    }

    changeValue(_value: string): void {
        this.familyService.setValue(_value);
    }
}
