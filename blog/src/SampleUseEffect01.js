/* eslint-disable */  //warning 제거
import React ,  {useState , useEffect} from "react"

export default function UseSample(){
    const [text , setText] = useState('');


    const writeLog = useEffect(()=>{

        console.log('test::' , text);

    },[text]);//의존성


    return(
        <div style={{textAlign:"center" , marginTop:"40px"}} >
            <h2>useEffect예제</h2>
            <p>Text::{text}</p><br/>
            <input
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="입력하세요" // placeholder : 인풋 프롬프트(Input Prompt)
            />
        </div>
    );


}