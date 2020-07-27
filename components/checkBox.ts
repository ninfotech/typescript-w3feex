import { InputBase } from "./inputBase";


export class CheckBox extends InputBase<boolean>{
  constructor(parent:HTMLElement){
    super('checkbox',parent);    
  }
  
}