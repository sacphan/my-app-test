import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/services/hero.service';
import { hero } from '../model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService : HeroService) { }
  heros:hero[]=[];
  ngOnInit(): void {
    this.heroService.getHeros().subscribe(result => this.heros = result);
  }

}
