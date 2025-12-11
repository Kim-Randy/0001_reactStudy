/* eslint-disable */  //warning 제거
import React , {useMemo , useState} from "react";

export default function UseMemoSample(){
    const [count,setCount] = useState(0);
    const [text, setText] = useState("");

    const doubleCount = useMemo(()=>{

        console.log("doubleCount 계산중 ...");
        return count * 2;
    } , [count]); //count가 바뀔 때만 다시 계산된 의존성
    

    return(
        <div style={{ textAlign:"center" , marginTop:"40px"}}>
            <h2>useMemo예제</h2>
            <p>count::{count}</p>
            <p>doubleCount : {doubleCount}</p>

            <button onClick={()=>setCount(count+1)}>+1</button>
            <br/><br/>

            <input
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="여기를 입력해도 double은 재계산 안됨" // placeholder : 인풋 프롬프트(Input Prompt)
            />
        </div>




    );

}