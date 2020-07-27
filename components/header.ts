// Import stylesheets
import './style.css';

/*
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
*/

import { Component } from './../decorators';


@Component({
  parentTag:'div',
  name:'nit-header',
  template:`<p>Header</p>`,
  styles:`
    
  `
})
export class NitHeader{
  
}


