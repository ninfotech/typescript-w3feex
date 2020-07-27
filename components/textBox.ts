import { InputBase } from "./inputBase";


export class TextBox extends InputBase<string>{
  constructor(parent:HTMLElement){
    super('text',parent);    
  }
  
}