import { Component, OnInit } from '@angular/core';
import { hero } from '../model/hero';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  selectedHero?:hero;
  heros:hero[]=[];

  onSelect(hero:hero)
  {
    this.selectedHero=hero;
  }
  ngOnInit(): void {
    this.heroService.getHeros().subscribe(result=>this.heros=result);

  }

}
