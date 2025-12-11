/* eslint-disable */ //warning 제거
import React , {useState , useCallback , useMemo , useEffect } from "react"


export default function UserSample(){
    // console.log("컴포넌트 랜더링");

    //1.useState - 상태값 저장
    const [count , setCount] = useState(0);
    const [text  , setText]  = useState("");

    //2.useEffect - 상태 변화 감지해서 반응
    useEffect(()=>{
        console.log("useEffect : count가 바뀌었어요 ::" , count);
    },[count]);

    //3.useMemo - 계산된 값 기억 (성능 최적화)
    const double = useMemo(()=>{
        console.log("useMemo : count*2 계산  중 ..");
        return count * 2;
    }, [count]);

    //useCallBack - 함수를 기억 (재생성 방지)
    const handleClick = useCallback(()=>{
        console.log("useCallback 실행 현재 count:" , count);
    }, [count]);

    const aa = useEffect(()=>{
        console.log('test :: ' , text);
    },[text]);

    const resetAll = () =>{
        console.log("초기화 버튼 클릭!");
        setCount(0);
        setText("");
    };

    return(
        <div style={{textAlign : "center" , marginTop:40}}>
            <h2>React Hooks 비교 예제</h2>

            <p>count :: {count}</p>
            <p>double(useMemo) :: {double}</p>

            <button onClick={()=> setCount(count+1)}> +1 증가</button><br/><br/>
            <input
                value={text}
                onChange={(e)=> setText(e.target.value) }
                placeholder="텍스트 입력"
            /><br/><br/>
            <button onClick={handleClick}>useCallback 실행</button><br/><br></br>
            <button onClick={resetAll} style={{mrginLeft:"10px" }} >초기화</button>            
        </div>
    )
}