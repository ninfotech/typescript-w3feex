

export class InputBase<T>{
  private _canvas: HTMLInputElement;
  private _v:T;
  private _fv:any;

  public set value(v:any){
    this._v = v;
    switch(this._canvas.type){
      case 'text':
        this._canvas.value = v;
        break;
      case 'number':
        this._canvas.value = v;
        break;
      case 'checkbox':
        this._canvas.checked = v;
        this._canvas.value = v;
        break;
    }
  };  
  public get value(){
    return this._v;
  }
  private next(v:any){
    this._v = v;
    if(this._fv){
      this._fv(v);
    }
  }

  public Subscribe(v:any){  this._fv = v; }

  constructor(type : string, private parent:HTMLElement){    
    this._canvas = document.createElement('input') as HTMLInputElement;
    this._canvas.type = type;
    this._canvas.onchange = this.valueChange.bind(this);
    parent.appendChild(this._canvas);
  }

  private valueChange(e){
    switch(this._canvas.type){
      case 'text':
        this.next(this._canvas.value);
        break;
      case 'number':
        this.next(this._canvas.valueAsNumber);
        break;
      case 'checkbox':
        this.next(this._canvas.checked);
        break;
    }
  }
  
}