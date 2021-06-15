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

  longestPrefix(pat: string){
    var table=new Array(pat.length)
    var maxPrefix=0
    table[0]=0

    for (var i=1;i<pat.length;i++){
      while ( maxPrefix>0 && pat.charAt(i) !== pat.charAt(maxPrefix)){
        maxPrefix=table[maxPrefix-1]
      }
      if (pat.charAt(maxPrefix)===pat.charAt(i))
        maxPrefix++
      table[i]=maxPrefix
    }
    return table
  }

  KMPAlgorithm(txt:string,pat:string){
    var prefixes=this.longestPrefix(pat)
    var matches=[]
    var i=0
    var j=0

    while (i<txt.length){
      if (txt.charAt(i)===pat.charAt(j)){
        i++
        j++
      }
      if (j===pat.length){
        matches.push(i-j)
        j=prefixes[j-1]
      }
      else if (txt.charAt(i)!==pat.charAt(j)){
        if (j!==0)
          j=prefixes[j-1]
        else
          i++
      }
    }




    if (matches.length!=0){
      this.result=matches
      this.check=true
    }
    else
      this.result=['Not exist']
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
