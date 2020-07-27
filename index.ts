// Import stylesheets
import './style.css';
import { NitHeader } from './components/header'
/*
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
*/

import { NitComponent } from './decorators';


@NitComponent({
  parentTag:'app',
  name:'app',
  template:`<p>Pierwszy wpis</p><nit-header></nit-header>`,
  styles:`
    #app{
      display:flex;
      flex-direction:row;
      justify-content: center;
      max-width:640px;
      width:640px;
      color:red;
      font-size:2.0em;
      border: solid 1px gray;
    }
  `
})
export class App{
  
}


