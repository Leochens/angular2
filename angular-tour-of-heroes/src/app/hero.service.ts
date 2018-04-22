import { Injectable } from '@angular/core';
import { Hero } from  './hero';
import { HEROES } from './mock-heroes'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { catchError,map,tap } from 'rxjs/operators';//错误处理
@Injectable()
export class HeroService {
    
  //服务中的服务
  constructor(private messageService:MessageService,
              private http:HttpClient) { 
  }
  private heroesUrl = 'api/heroes';// URL to web api
  getHeroes():Observable<Hero[]>{
      /*of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。*/
         
      //在获取到英雄数组时从 HeroService 中发送一条消息
      this.messageService.add('HeroService:fetched heroes');

      //return of(HEROES);
      //变成使用HttpClient的
      //现在，使用 .pipe() 方法来扩展 Observable 的结果，并给它一个 catchError() 操作符。
      console.log(this.http.get<Hero[]>(this.heroesUrl));
      console.log('hahahahah');
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(heroes => this.log(`fetched heroes`)),
          catchError(this.handleError('getHeroes',[]))
        );
  }


  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // getHero(id: number): Observable<Hero> {
  //   // Todo: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService:fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }
  getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}
  private log(msg:string):void{
    this.messageService.add(msg);
  }
}
