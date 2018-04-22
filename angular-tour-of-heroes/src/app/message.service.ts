import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  constructor() { }

  messages:string[]=[];
  
  /**
   * 添加信息
   * @param {string} message [description]
   */
  add(message:string){
      this.messages.push(message);
  }

  /**
   * 情况信息
   */
  clear(){
      this.messages=[];
  }
}
