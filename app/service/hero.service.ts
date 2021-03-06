import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../mock/mock-heroes';

@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
	    return Promise.resolve(HEROES);
	  }
	  
	getHeroesSlowly(): Promise<Hero[]> {
	  return new Promise<Hero[]>(resolve =>
	    setTimeout(resolve, 2000)) // delay 2 seconds
	    .then(() => this.getHeroes());
	}
}
