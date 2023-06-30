import React from "react";

const SentenceMaker=({sentence,num})=>{
  String.prototype.toKorChars = function() { 
    let first= [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ];
    // let middle= [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ];
    let end= ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    var str = this, 
    chars = [], 
    cCode; 
    for (let i = 0; i < str.length; i++) {
      cCode= str.charCodeAt(i);
      if(cCode===0o20){
        chars.push("");
        continue;
      }
      if(cCode< 0xAC00 || cCode > 0xD7A3){ // 한글이 아닐 경우 문자 그대로 출력
        chars.push(str.charAt(i));
        continue;
      }
      cCode= str.charCodeAt(i)-0xAC00;
      let endIc= cCode%28;
      let middleIc=((cCode-endIc)/28)%21
      let firstIc=(((cCode-endIc)/28)-middleIc)/21
  
      chars.push(first[firstIc]); // 자음 입력 (꽃: [ㄲ])
      chars.push(String.fromCharCode(44032+(firstIc*588)+(middleIc*28))); // 모음 입력 (꽃:[ㄲ,꼬])
      end[endIc]!==""&&chars.push(String.fromCharCode(44032+(firstIc*588)+(middleIc*28)+endIc)) // 받침 입력 (꽃:[ㄲ,꼬,꽃])
      
    }
    return chars;
  }
  
  // 문장 입력
  let typeing=[];
  let result= sentence.split('');
  
  for (let i = 0; i < result.length; i++) {
    typeing[i]=result[i].toKorChars();
  }
  let text="";
  let i=0;
  let j=0;
  let imax= typeing.length;
  let inter= setInterval(typi,150);
  
  function typi(){
    if(i<=imax-1){
      let jmax= typeing[i].length;
      document.querySelector(`.result${num}`).innerHTML= text+typeing[i][j];
      console.log(text+typeing[i][j]);
      j++;
      if(j===jmax){
        text+=typeing[i][j-1];
        i++;
        j=0;
      }
    }else{
      clearInterval(inter);
    }
  }
  return(
    <div>
      <p className={`result${num}`}>왜</p>
    </div>
  )

}

export default SentenceMaker;