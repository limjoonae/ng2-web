import { Component, Input } from '@angular/core';
import { Hero } from '../model/hero';
	
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'html-template/hero-detail.component.html'
})
export class HeroDetailComponent {
	@Input() hero: Hero;
}
