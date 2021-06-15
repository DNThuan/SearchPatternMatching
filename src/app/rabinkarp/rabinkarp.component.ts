import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-rabinkarp',
  templateUrl: './rabinkarp.component.html',
  styleUrls: ['./rabinkarp.component.css'],
  animations: [
    trigger('myanimation', [
        
        state('next0', style({
            transform: 'translateX(0px)'
        })),
        state('next1', style({
          transform: 'translateX(40px)'
        })),
        state('next2', style({
          transform: 'translateX(80px)'
        })),
        state('next3', style({
          transform: 'translateX(120px)'
        })),
        state('next4', style({
          transform: 'translateX(160px)'
        })),
        state('next5', style({
          transform: 'translateX(200px)'
        })),
        state('next6', style({
          transform: 'translateX(240px)'
        })),
        state('next7', style({
          transform: 'translateX(280px)'
        })),
        state('next8', style({
          transform: 'translateX(320px)'
        })),
        state('next9', style({
          transform: 'translateX(360px)'
        })),
        state('next10', style({
          transform: 'translateX(400px)'
        })),
        state('next11', style({
          transform: 'translateX(440px)'
        })),
        state('next12', style({
          transform: 'translateX(480px)'
        })),
        state('next13', style({
          transform: 'translateX(520px)'
        })),
        state('next14', style({
          transform: 'translateX(560px)'
        })),
        state('next15', style({
          transform: 'translateX(600px)'
        })),
        state('next16', style({
          transform: 'translateX(640px)'
        })),
        state('next17', style({
          transform: 'translateX(680px)'
        })),
        state('next18', style({
          transform: 'translateX(720px)'
        })),
        state('next19', style({
          transform: 'translateX(760px)'
        })),
        state('next20', style({
          transform: 'translateX(800px)'
        })),
        state('next21', style({
          transform: 'translateX(840px)'
        })),
        state('next22', style({
          transform: 'translateX(880px)'
        })),
        state('next23', style({
          transform: 'translateX(920px)'
        })),
        state('next24', style({
          transform: 'translateX(960px)'
        })),
        state('next25', style({
          transform: 'translateX(1000px)'
        })),
        transition('* <=> *', animate('200ms ease-in'))
    ])
  ]

})
export class RabinkarpComponent implements OnInit {
  state: string = "next0";

  animate(status:string) {
        this.state = status
  }
  
  headers=["Index","String","H_value"];

  text=''
  pattern=''
  result=Array()
  check=false
  
  Hash_txt= Array()
  Hash_pat= Array()

  constructor() { }
 
  ngOnInit(){ 
    
    
    
}

  
  delay(ms:number){
    return new Promise(res => setTimeout(res, ms));
  }

  async RaBinKarpAlgorithm(txt:string,pat:string){
  
    let array=new Array()
    let M=pat.length
    let N=txt.length
    let i:number
    let j:number
    let p=0
    let t=0
    let h=1
    let d=256
    let q=101
    
    for(i=0;i<M-1;i++)
      h=(h*d)%q

    //thêm hash vào bảng
    for(i=0;i<M;i++){
      p=(d*p+pat.charCodeAt(i))%q
      t=(d*t+txt.charCodeAt(i))%q
    }
    this.Hash_pat=[0,pat,p]
    
    //tô xanh phần tử chọn

    for (let i=0;i<M;i++){
      let index_txt="#postxt"+(i).toString()
      let index_pat="#pospat"+(i).toString()
      $(index_txt).css("background-color","rgb(0, 238, 255)");
      $(index_pat).css("background-color","rgb(0, 238, 255)");
    }
               
    
    await this.delay(1000);
    
    // giá trị hash của pattern
   

    //
    for (i=0;i<N-M+1;i++){
      this.Hash_txt.push([i,txt.slice(i,i+M),t]) // in ra bảng 
      
      let index_txt="#postxt"+i.toString()

      var is_pat=false

      if (p==t){
        
        this.doubt(i,M)
        await this.delay(1000);

        for (j=0;j<M;j++){
          this.check2str(i,j,M,txt[i+j] ==pat[j])
          await this.delay(800);
          if(txt[i+j] !=pat[j])
            break
        }

        if(j==M){
          array.push(i)

          is_pat=true
          await this.delay(150);
          $(index_txt).css("background-color","chartreuse");
        }
        
        await this.delay(1000);
      }
      this.return_color(i,M,"pat")
      //await this.delay(1000);
      this.nextStep(i+1,M,is_pat)
      
      if (i<N-M){
        let next_status="next"+(i+1).toString()
        this.animate(next_status)
      }
      
      if (i<N-M){
        t=(d*(t-txt.charCodeAt(i)*h)+txt.charCodeAt(i+M))%q
        if (t<0)
          t=(t+q)
      
      is_pat=false
      await this.delay(1000); 
      }
      for(let i=N-1;i>N-M;i--){
        let index_txt="#postxt"+(i).toString()
        $(index_txt).css("background-color","white");
      }
      
    }
    
    if (array.length!=0){
      this.result=array
      this.check=true
    }
    else{
      this.result=['Not exist']
    }
    
    
  }


  SumIndex(arr:number[]){
    let rs=0
    if (this.check==true)
      rs=arr.length
    return rs
  }

  ArrayToString(arr:number[]){
    let s=''
    for(let i=0;i<arr.length;i++){
      s+=arr[i].toString()+' '
    }
    return s
  }
 
  getPat(arr:number[]){
    return arr
  }

  stringToChar(str:string){
    let arr=[]
    for (let i=0;i<str.length;i++){
      arr.push(str[i])
    }
    return arr
  }

  doubt(index:number,len:number){
    
    for(let i=0;i<len;i++){
      let index_txt="#postxt"+(index+i).toString()
      let index_pat="#pospat"+(i).toString()
      $(index_txt).css("background-color","yellow");
      $(index_pat).css("background-color","yellow");
    }
  }


  nextStep(index:number,len:number,is_pat:boolean){
    let index_txt0="#postxt"+(index-1).toString()

    if (is_pat==false){
      $(index_txt0).css("background-color","white");  
    }
    for (let i=0;i<len;i++){
      let index_txt1="#postxt"+(index+i).toString()
      $(index_txt1).css("background-color","rgb(0, 238, 255)");
    }
  }
  
  
  check2str(i:number,j:number,len:number,check:boolean){
    let index_txt="#postxt"+(i+j).toString()
    let index_pat="#pospat"+(j).toString()
    if (check==true){
      $(index_txt).css("background-color","green");
      $(index_pat).css("background-color","green");
    }
    else{
      $(index_txt).css("background-color","red");
      $(index_pat).css("background-color","red");
    }
    
  }
  
  return_color(index:number,len:number,txt_pat:string){
    if (txt_pat=="pat"){
      for(let i=0;i<len;i++){
        let index_pat="#pospat"+(i).toString()
        $(index_pat).css("background-color","rgb(0, 238, 255)");
      }
    }
    else{
      for(let i=0;i<len;i++){
        let index_txt="#pospat"+(index+i).toString()
        $(index_txt).css("background-color","white)");
      }
    }
  }

  

}
