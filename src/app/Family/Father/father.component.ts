import { Component, OnInit } from '@angular/core';
import { FamilyService } from './../family.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  private _familyValue: String;

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.familyService.famliyValue$.subscribe(data => this._familyValue = data);
  }
  changeValue(_value: string) {
    this.familyService.setValue(_value);
  }

}
