import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.css']
})
export class KmpComponent implements OnInit {

  text=''
  pattern=''
  check=false
  result=Array()

  constructor() { }

  ngOnInit(): void { }

  computeTemporaryArray(pattern: string[]){
    const lps=[0]
    let index=0
    for (let i=1;i<pattern.length;){
      if (pattern[i]==pattern[index]){
        lps.push(index+1)
        index++
        i++
      }
      else{
        if (index!=0){
          index=lps[index-1]
        }
        else{
          lps[i]=0
          i++
        }
      }
    }
    return lps
  }

  KMPAlgorithm(txt:string,pat:string){
    let array= new Array()
    const textArr=txt.split('')
    const patArr=pat.split('')
    const lps=this.computeTemporaryArray(patArr)
    let i=0
    let j=0
    while (i<textArr.length){
      if (textArr[i]==patArr[j]){
        i++
        j++
      }
      if (j==patArr.length){
        array.push(i-j)
        j=lps[j-1]
      }
      else if (i<textArr.length && pat[j]!=txt[i]) {
        if (j!=0){
          j=lps[j-1]
        }
        else{
          i++
        }
      }
    }
    if (array.length!=0){
      this.result=array
      this.check=true
    }
    else
      this.result=['Dose not exist']
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

}
