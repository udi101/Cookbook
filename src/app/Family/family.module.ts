import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { FamilyComponent } from './family.component';
import { GrandfatherComponent } from './Grandfather/grandfather.component';
import { FatherComponent } from './Father/father.component';
import { ChildComponent } from './Child/child.component';

@NgModule({
    declarations: [
        FamilyComponent,
        GrandfatherComponent,
        FatherComponent,
        ChildComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: FamilyComponent }])],
    exports: [],
    providers: []
})
export class FamilyModule {
}
