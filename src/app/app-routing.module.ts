import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Components
import { LoginGuard } from './login/login.guard';
import { HomeComponent } from './home/home.component';
import { E404Component } from './e404/e404.component';

// The Routes
const ROUTES: Routes = [
    { path: 'Home', component: HomeComponent, data: { title: 'Udi Mazor' }  },
    { path: 'Events', loadChildren: './Events/event.module#EventModule', canActivate: [LoginGuard] },
    { path: 'Family', loadChildren: './Family/family.module#FamilyModule' },
    { path: 'Redux', loadChildren: './redux/redux.module#ReduxModule' },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: E404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })],
    declarations: [HomeComponent, E404Component],
    exports: [RouterModule],
    providers: [LoginGuard]
})
export class AppRoutingModule {
}
