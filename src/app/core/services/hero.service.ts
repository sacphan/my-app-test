import { Injectable } from '@angular/core';
import { hero } from 'src/app/model/hero';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) {

   }
  hero: hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  getHeros():Observable<hero[]>
  {
    const heros = of(this.hero);
    this.messageService.add("HeroService: fetched heros");
    return heros;
  }
}
