import {useEffect , useRef , useState} from "react";

export default function Sample() {

const [count , setCount] = useState(0);
//타이머 관련 hook's : 컨포넌트 회상단에만! 
const [seconds , setSeconds] = useState(0);
const intervalRef = useRef(null);
const [running , setRunning] = useState(false);

const fx=()=>setCount((v)=> v+1);
const fy=()=>{
    if(running) return; //중복시작 방지
    setRunning(true);
    intervalRef.current = setInterval(()=>{

        setSeconds((s)=>s+1);
    }, 1000);
};

const stop = ()=>{
    if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    setRunning(false);
}

useEffect(()=>()=>stop(),[]);


return(
    <>
    <button onClick={fx}> count:: {count} </button><br/>
    <button onClick={fy}>Y</button><br/>
    <button onClick={stop}>stop</button><br/>
    <div>
        seconds :: {seconds}
    </div>
    </>
);











}