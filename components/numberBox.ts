import { InputBase } from "./inputBase";


export class NumberBox extends InputBase<number>{
  constructor(parent:HTMLElement){
    super('number',parent);    
  }
  
}