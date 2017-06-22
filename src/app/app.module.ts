import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login/login.guard';
import { E404Component } from './e404/e404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: 'Events', loadChildren: './Events/event.module#EventModule', canActivate: [LoginGuard] },
      { path: 'Family', loadChildren: './Family/family.module#FamilyModule' },
      { path: 'Redux', loadChildren: './redux/redux.module#ReduxModule' },
      { path: '**', component: E404Component }
    ], { preloadingStrategy: PreloadAllModules }),
    BsDropdownModule.forRoot()
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
