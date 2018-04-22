import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import { HeroService } from './hero.service'
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  /*providers 数组会告诉 Angular 创建 
  HeroService 的单一、共享的实例，并且把它注入到任何请求注入它的类中。*/
    HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
