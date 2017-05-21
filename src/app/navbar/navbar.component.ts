import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(private router: Router) { }

    checkActiveLink(urlStart: string) {
        if (this.router.url.startsWith(urlStart)) {
            return true;
        }
        return false;
    }
}
