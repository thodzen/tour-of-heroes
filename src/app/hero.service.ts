import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// the @Injectable() decorator marks the class as one that participates in the dependency injection system
// the @Injectable() decorator accepts a metadata object for the service,
// the say way te @Component() decorator did for the component classes
@Injectable({
  // when you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any
  // class that asks for it
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
