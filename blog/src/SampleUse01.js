/* eslint-disable */  //warning 제거
import React, {useState , useEffect  , useMemo , useCallback} from "react";

export default function Sample(){
    var a = 0;
    var [b , setB] = useState(0);
    const [ex1 , setEx1] = useState(0);
    const [why , setWhy] = useState(0);

    function fa(){
        a = a+1
        console.log('a::', a);
    }

    function fb(){
        setB(b+1)
         console.log('b::',b);
    }    

    function fx(){
        setEx1(ex1+1)
//        console.log('ex1::', ex1)
    }

    function fy(){
        const [seconds , setSeconds] = useState(0);


        useEffect (()=>{
            const interval = setInterVal(()=>{
                setSeconds(prevSeconds => prevSeconds +1 );
            }, 1000);

            return () => clearInterval(interval);
        },[]);
        
        console.log(seconds);

    }




    return(
        <>
            <button onClick={ fa }>A</button><br/>
            <button onClick={ fb }>B</button><br/>
            <button onClick={ fx }>count :: {ex1} </button><br/>
            <button onClick={ fy }>Y </button>
       </>
    );
}

