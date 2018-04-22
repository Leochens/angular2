import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  /*providers 数组会告诉 Angular 创建 
  HeroService 的单一、共享的实例，�,
  MessageService�且把它注入到任何请求注入它的类中。*/
    HeroService,
    MessageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
