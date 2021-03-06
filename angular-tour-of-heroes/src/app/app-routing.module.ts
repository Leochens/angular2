import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'; 
import { HeroesComponent }  from './heroes/heroes.component';
import { HeroDetailComponentComponent }  from './hero-detail-component/hero-detail-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
/*
你通常不会在路由模块中声明组件，所以可以删除 @NgModule.declarations 并删除对 CommonModule 的引用。
 */
const routes: Routes = [
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponentComponent },

];
@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: [],
  exports:[
      RouterModule
  ],
  /*
      你必须首先初始化路由器，并让它开始监听浏览器中的地址变化。

    把 RouterModule 添加到 @NgModule.imports 数组中，
    并用 routes 来配置它。你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了。
   */
  imports: [ RouterModule.forRoot(routes) ],
  /*
  这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。
   forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
   */
})
export class AppRoutingModule { }
