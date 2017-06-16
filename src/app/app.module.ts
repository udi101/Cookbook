import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: 'Events', loadChildren: './Events/event.module#EventModule' },
      { path: 'Family', loadChildren: './Family/family.module#FamilyModule' },
      { path: '**', component: HomeComponent }
    ], { preloadingStrategy: PreloadAllModules }),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
