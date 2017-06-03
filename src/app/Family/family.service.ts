import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FamilyService {
    private familyValue: Subject<string> = new Subject<string>();
    famliyValue$ = this.familyValue.asObservable();


    setValue(_value: string) {
        (function (fv) {
            'use strict';
            setTimeout(function () {
                fv.next(_value);
            }, 1500);
        })(this.familyValue);
    }
}
