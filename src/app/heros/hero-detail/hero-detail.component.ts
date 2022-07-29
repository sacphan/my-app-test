import { Component, OnInit,Input } from '@angular/core';
import { hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  @Input() hero?:hero
  ngOnInit(): void {
  }

}
