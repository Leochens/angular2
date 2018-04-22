import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
     //  hero:string = 'Windstorm';
  // hero:Hero={
  //     id: 1,
  //     name:"WindStorm"
  // };
  selectedHero:Hero;
  heroes:Hero[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  //
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes=heroes);
      /**
       Observable.subscribe() 是关键的差异点。
      上一个版本把英雄的数组赋值给了该组件的 heroes 属性。 
      这种赋值是同步的，这里包含的假设是服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面。
      当 HeroService 真的向远端服务器发起请求时，这种方式就行不通了。
      新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。 然后，subscribe 函数把这个英雄数组传给这个回调函数，
      该函数把英雄数组赋值给组件的 heroes 属性。
      使用这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了。
       */
  }

}
