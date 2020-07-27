
export class Observable<T>{
  value:T;
  vd:any;
  next(v:any){
    this.vd(v); 
  }
  subscribe(v){
    this.vd = v;
  }
}


export class O1{
  v1 : Observable<number> = new Observable<number>();
  
  constructor(){
    this.v1.subscribe(r=>{

      console.log(r); 
    });
  }

  change(n:number){
    this.v1.next(n);
  }
}