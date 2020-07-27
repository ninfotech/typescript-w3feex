export const NitModule = (metadata:{} = {}) => {


}
// --------------------------------------------------------
export const NitComponent = (metadata: {parentTag:string,name:string, template:string,styles:string,tagStyles?:boolean}) => {   
    return function log(target: any) {    
        // Add metadata
        target.__customMetadata = metadata;
        c(metadata.parentTag,target);
        return target;    
    }  
    function c(tag:string,t:any){
      switch(tag){
        case 'app':
          t.htmlElement = document.getElementById('app');  //document.body;
          t.htmlElement.innerHTML = metadata.template;
          let bstyle = document.createElement('style');
          bstyle.type='text/css';
          bstyle.innerHTML = metadata.styles;
          document.getElementsByTagName('head')[0].appendChild(bstyle);
          document.body.appendChild(t.htmlElement);
          document['all-comps'] = {};
          document['comps-count'] = 1;

          break;
        case 'div':
          t.htmlElement = document.createElement('div') as HTMLDivElement;
          t.htmlElement.innerHTML = metadata.template;
          break;
      }
      console.log(t.htmlElement)
    }   
}
// =========================================================================================