
// Those are integrated test I wrote alone

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TestComponent } from './test.component';

describe('testComponent tests', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    // async function maked the async operations of the testBed to be synchronic
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugEl = fixture.debugElement;
    });
});
