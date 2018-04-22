import { Injectable } from '@angular/core';
import { Hero } from  './hero';
import { HEROES } from './mock-heroes'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


import { MessageService } from './message.service';

@Injectable()
export class HeroService {
    
  //服务中的服务
  constructor(private messageService:MessageService) { 
  }



  /*获得hero列表*/
  // getHeroes(): Hero[]{
  //     return HEROES;
  // }
  getHeroes():Observable<Hero[]>{
      /*of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。*/
         
      //在获取到英雄数组时从 HeroService 中发送一条消息
      this.messageService.add('HeroService:fetched heroes');

      return of(HEROES);
  }
  // getHero(id:number):Observable<Hero>{
  //   this.messageSrvice.add(`获取id=${id}号的英雄`);
  //   return of(HEROES.find(hero=>hero.id===id));
  // }
  getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}
}
