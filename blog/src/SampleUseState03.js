/* esline-disable */ //warning 제거

import React, {useState} from "react";

export default function UseState03(){
    const [count,setCount] = useState(0);


    const addThree = () => {
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        setCount((prev)=>prev+1);
        setCount((prev)=>prev+1);
        setCount((prev)=>prev+1);
    }

    console.log("렌더링 ! 현재 count:" , count);

    return (
        <div style={{textAlign:"center" , marginTop:40}}>
            <h2>useState 심화 - 수정된 연속 업데이트</h2>
            <p>count: {count}</p>
            <button onClick={addThree} >+3(라고 생각 했는데>)</button>
        </div>
    );
}