import { InputBase } from "./inputBase";


export class DateBox extends InputBase<number>{
  constructor(parent:HTMLElement){
    super('date',parent);    
  }
  
}


export class TimeBox extends InputBase<number>{
  constructor(parent:HTMLElement){
    super('time',parent);    
  }
  
}

export class DateTimeBox extends InputBase<number>{
  constructor(parent:HTMLElement){
    super('datetime-local',parent);    
  }
  
}