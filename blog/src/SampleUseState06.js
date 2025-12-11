/* eslint-disable */ //waring 제거용

import REact , {useState} from "react";


const init = {
    name:"Tony",
    age:42,
    job:"java개발자"

}


export default function SampleUseState06(){
    const [user , setUser] = useState(init);

    const changeName=()=>{
        //이름만 변경 (다른값은 유지)
        setUser((prev) => ({
            ...prev,
            name:"Randy",
        }));
    };

    const changeAge=()=>{
        //나이만변경(다른값은 유지)
        setUser((prev)=>({
            ...prev,
            age:prev.age+1
        }));
    };

    const changeJob=()=>{
        //직업만변경(다른값 유지)
        setUser((prev)=>({
            ...prev,
            job:"Full Stack 개발자"
        }));
    };

    const reseUser=()=>{
        //전체 값을 한꺼번에 초기값으로 되돌리기
        setUser(init);
    };

    console.log("랜더링 ! 현재 user:" , user);

    return(
        <div style={{textAlign:"center",marginTop:40}} >
            <h2>useState 심화 - 객체 상태 관리</h2>
            <p>
                이름 : {user.name} / 나이:{user.age} / 작업:{user.job}
            </p>

            <div style={{marginTop:10}} >
                <button onClick={changeName} >이름변경</button>
                <button onClick={changeAge} style={{ marginLeft:"10px" }}>나이 +1</button>
                <button onClick={changeJob} style={{marginLeft:"10px"}}>직업변경</button>
                <button onClick={reseUser} style={{marginLeft:"10px"}}>초기화</button>
            </div>
        </div>
    );
}