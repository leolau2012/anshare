import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  //展示
  template: '<h1>hello {{myHero}}!</h1>'
})
export class AppComponent { 
    //提供数据 1.变量赋值
    // title = 'Tour of Heroes';
    // myHero = 'Windstorm';
    //2.构造函数来声明和初始化属性
    title: string;
    myHero: string;
    constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    }
}
