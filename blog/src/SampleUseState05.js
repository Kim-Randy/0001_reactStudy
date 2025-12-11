/* esline-disable */ //warning 제거

import React , {useState} from "react";

export default function SampleUseState05(){
    const [hobbies,setHobbies] = useState(["코딩","음악"]);

    const addHobby=()=>{
        //기준 배열을 복사하고 새 항목 추가
        setHobbies((prev)=>[...prev,"독서"]);
    };

    const removeFirst=()=>{
        //0번째 요소 제거 (새 배열로 반환)
        setHobbies((prev)=>prev.slice(1));
    }

    console.log("렌더링! 현재 hobbies:" , hobbies);



    return(
        <div style={{textAlign: "center", marginTop:40 }}>
            <h2>useState 심화 - 배열 상태 관리 </h2>
            <p>취미 리스트 : {hobbies.join(",")}</p>
            <button onClick={addHobby}> 새 취미 추가 </button>
            <button onClick={removeFirst} style={{ marginLeft:"10px" }}> 
                첫 취미 제거
            </button>
        </div>
    );
}


