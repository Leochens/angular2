import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService} from '../message.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //注入服务
  constructor(private heroService:HeroService,
              private messageService:MessageService) { }
  heroes:Hero[]=[];
  ngOnInit() {
      this.getHeroes();
  }

  getHeroes():void{
      this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(0,4));
      this.messageService.add('dashboard 获取英雄列表完成~.');
  }
}
