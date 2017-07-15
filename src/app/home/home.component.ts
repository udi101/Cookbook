import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JQUERY_TOKEN } from './../common/jQuery.service';
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    pageTitle: string;

    constructor(private router: ActivatedRoute, @Inject(JQUERY_TOKEN) private $: any) { }

    ngOnInit() {
        this.pageTitle = this.router.snapshot.data['title'];
    }
}


// This component also has Dependancy injection of jQuery
