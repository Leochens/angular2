import { Injectable } from '@angular/core';
import { Hero } from  './hero';
import { HEROES } from './mock-heroes'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'
@Injectable()
export class HeroService {

  constructor() { }
  /*获得hero列表*/
  // getHeroes(): Hero[]{
  //     return HEROES;
  // }
  getHeroes():Observable<Hero[]>{
      /*of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。*/
      
      return of(HEROES);
  }
}
