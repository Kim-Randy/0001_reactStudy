import React, { useState, useEffect, useMemo, useCallback} from "react";


export default function HookVisualizer(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [logs, setLogs] = useState([]); //<- 화면에 보여줄 log List

    const addLog = (message) =>  {
        console.log("==============================================");
        setLogs((prev) => [...prev ,`${new Date().toLocaleTimeString()} - ${message}`,
        ]);
    };

    //count가 바뀔 때 자동 실행
    useEffect(()=>{
        addLog(`useEffect 실행 : count -> ${count}`);
    }, [count]);


    //count가 바뀔 때만 계산
    const double = useMemo(()=>{
        addLog(`useMemo 계산 : ${count} * 2 = ${count *2}`);
        return count *2;
    },[count]);

    const handleClick = useCallback(()=>{
        addLog(`useCallback 실행! 현재 count: ${count}`);
    },[count]);

    const resetAll = () => {
        addLog("초기화 실행");
        setCount(0);
        setText("");
        setLogs([]);
    };




    return(
        <div style={{ textAlign: "center" , marginTop:40}}>
            <h2>Hook 동작 시작화 예제</h2>

            <p>count : {count}</p>
            <p>double(useMemo):{double}</p>

            <button onClick={()=> setCount(count+1)}>+1증가</button>
            <button onClick={resetAll} style={{ marginLeft:"10px"}} >초기화</button>
            <br/><br/>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="텍스트 입력"
            /><br/><br/>

            <button onClick={handleClick}> useCallback 실행 </button>
            <hr style={{margin : "30px 0"}} />
            <h3> hook 실행 로그</h3>
            <div
                style={{
                    background:"#111",
                    color:"#0f0",
                    padding:"10px",
                    borderRadius:"8px",
                    textAlign:"left",
                    width:"70%",
                    margin:"0 auto",
                    height:"200px",
                    overflowY:"auto",
                    fontFamily:"monospace",
                    fontSize:"14px"
                }}
            >
                {logs.map((log,idx)=>(
                    <div key={idx}>{log}</div>
                ))}
            </div>
        </div>
    );
}