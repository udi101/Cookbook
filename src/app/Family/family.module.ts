import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { FamilyComponent } from './family.component';
import { GrandfatherComponent } from './Grandfather/grandfather.component';
import { FatherComponent } from './Father/father.component';

@NgModule({
    declarations: [
        FamilyComponent,
        GrandfatherComponent,
        FatherComponent
    ],
    imports: [CommonModule,
        RouterModule.forChild([
            { path: '', component: FamilyComponent }])],
    exports: [],
    providers: []
})
export class FamilyModule {
}
