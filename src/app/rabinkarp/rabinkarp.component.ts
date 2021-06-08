import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rabinkarp',
  templateUrl: './rabinkarp.component.html',
  styleUrls: ['./rabinkarp.component.css']
})
export class RabinkarpComponent implements OnInit {

  headers=["Index","String","H_value"];

  text=''
  pattern=''
  result=Array()
  check=false

  Hash_txt= Array()
  Hash_pat= Array()

  constructor() { }

  ngOnInit(){}


  RaBinKarpAlgorithm(txt:string,pat:string){
    let hash_txt=new Array()
    let hash_pat=new Array()
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

    for(i=0;i<M;i++){
      p=(d*p+pat.charCodeAt(i))%q
      t=(d*t+txt.charCodeAt(i))%q
    }
    hash_pat=([pat,p])
    for (i=0;i<N-M+1;i++){
      hash_txt.push([i,txt.slice(i,i+M),t])
      if (p==t){
        for (j=0;j<M;j++){
          if(txt[i+j] !=pat[j])
            break
        }
        if(j==M)
          array.push(i)
      }
      if (i<N-M){
        t=(d*(t-txt.charCodeAt(i)*h)+txt.charCodeAt(i+M))%q
        if (t<0)
          t=(t+q)
      }
    }

    if (array.length!=0){
      this.result=array
      this.check=true
    }
    else{
      this.result=['Does not exist']
    }
    this.Hash_txt=hash_txt 
    this.Hash_pat=hash_pat
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
 


}
