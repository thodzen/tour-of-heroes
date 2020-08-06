import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // Look into @Input more
  constructor(
    // The ActivateRoute hold information about the route to this instance of teh HeroDetailComponent. This component...
    // ... is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display
    private route: ActivatedRoute,
    // The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display
    private heroService: HeroService,
    // The location is an Angular service for interacting with the browser. Will be used later to navigate back to the view that...
    // ... navigated here
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}
