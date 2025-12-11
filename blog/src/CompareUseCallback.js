/* eslint-disable */ //warning 제거

import React,{useState,useCallback,memo} from "react";


// 타입 제거하고 주석으로만 설명
// Child 컴포넌트 props 구조: { label: string, count: number, onClick: function }
const Child  = memo(({label,count,onClick}) => {
    console.log(`Child 렌더링 : ${label}`) ;
    return(
      <div style={{border:"1px solid gray" , margin:"8px",padding:"8px"}}>
        <p>{label}</p>
        <p>count:{count}</p>
        <button onClick={onClick}>++1</button>
      </div>
    );
});

const CompareUseCallback = () => {
    const [noCbCount , setNoCbCount] = useState(0); //useCallback 안 쓰는 쪽
    const [cbCount , setCbCount] = useState(0);     //useCallBAck 쓰는 쪽
    const [text , setText] = useState("");          //부모의 공통 state

    // X : useCallback 없는 버전: 렌더마다 "새 함수"가 만들어짐
    const handleNoCbClick = () => {
        setNoCbCount((prev)=>prev+1);
    };

    // O :  useCallback 있는 버전 : deps([])라서 함수가 한 번만 만들어지고 계속 재사용됨
    const handleCbClick = useCallback(()=>{
        setCbCount((prev)=>prev+1);
    },[]);

    return(
        <div>
            <h2>useCallback 비교예제 (한 파일에서 둘 다) </h2>
            <div>
                <input
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    placeholder="여기에 타이핑 해서 렌더링 비교"
                    style={{padding:"40px",width:"240px"}}
                />
            </div>
            <div style = {{display:"flex" , justifyContent:"center",gap:"16px"}}>
                {/* 1) useCallback 없이 만든 지식 */}
                <Child
                    label="X useCallback 없음 (항상 새 함수)"
                    count={noCbCount}
                    onClick={handleNoCbClick}
                />
                {/*2) useCallback 적용한 자식 */}
                <Child
                    label="useCallback 사용(함수고정)"
                    count={cbCount}
                    onClick={handleCbClick}
                />
            </div>
        </div>
    );
};

export default CompareUseCallback;