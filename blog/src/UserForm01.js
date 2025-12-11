/* eslint-disable */
import React , {useState} from "react";

export default function UserForm01(){
    const [form , setForm] = useState({
        name:"",
        age:"",
        email:""

    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm((prev)=>({
            ...prev,
            [name] : value
        }));
    };

    return(
        <div style={{padding:20}} >
            <h2>실무 패턴 - input 여러 개 관리</h2>
            <label>이름 : </label>
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="이름"
            /><br/>
            <label>나이 : </label>            
            <input 
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="나이"
            /><br/>
            <label>이메일 : </label>
            <input 
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="이메일"
            />
            <pre>{JSON.stringify(form,null,1)}</pre>
        </div>
    );
}
