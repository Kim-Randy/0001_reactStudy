/* eslint-disable */ //warning 제거
import React, {useState} from "react";

export default function UseState02(){

    const [count , setCount] = useState(0);


    const handleClick = () => {
        console.log("클릭 직전 count:" , count);

        //같은 렌더 사이클 안에서는 값이 바로 안 바뀜
        setCount(count+1);
        console.log("클릭 직후 count:" , count);

        // 다음 렌더링 후에는 업데이트 반영 됨
    }

    console.log("렌더링! 현재 count:" , count);

    return(
        <div style={{textAlign: "center" , marginTop:40}}>
            <h2>useState 심화 - 비동기 업데이트 이해</h2>
            <p>count:{count}</p>
            <button onClick={handleClick} >+1 증가</button>
        </div>
    );
}