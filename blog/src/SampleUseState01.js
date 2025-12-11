/* eslint-disable */  //warning 제거
import React, { useState} from "react";

export default function Counter() {
//count:현재상태값
//setCount : 상태를변경하는 함수
const [count , setCount] = useState(0)


const handleClick = () => {
    setCount(count+1); //클릭할때 마다 +1
};


    return(
      <div style={{ textAlign: "center" , marginTop: "50px"  }} >
        <h2>현재 카운트: {count}</h2>
        <button onClick={handleClick}>+1 증가</button>
      </div>
    );


}