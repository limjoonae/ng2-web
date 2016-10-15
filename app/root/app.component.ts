import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'html-template/app.component.html',
  styleUrls: ['style-template/app.component.css', 'style-template/style.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }
  	
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  	
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
