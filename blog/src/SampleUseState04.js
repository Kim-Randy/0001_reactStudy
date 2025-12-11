/* esline-disable */ //warning 제거

import React , {useState} from "react"

export default function SampleUseState04(){
    const [user,setUser] = useState({name:"Randy", age:30});

    const handleChangeName = ()=>{
        //이렇게 하면 age 사라짐
        //setUser({name:"KIM"});

        //기존 객체 유지 + name만 변경
        setUser((prev)=>({...prev,name:"Kim"}));
    };

    const handleIncreaseAge=()=>{
        setUser((prev)=>({...prev,age:prev.age+1}));
    }

    console.log("랜더링! 현재 user:" , user);

    return(
        <div style={{textAlign:"center" , marginTop:40 }}>
            <h2>userState 심화 - 객체 상태 관리 </h2>
            <p>
                이름:{user.name}, 나이:{user.age}
            </p>
            <button onClick={handleChangeName} >이름 변경</button>
            <button onClick={handleIncreaseAge} style={{ marginLeft: "10px" }} >나이 +1</button>
        </div>
    );
}