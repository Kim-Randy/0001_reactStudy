/*eslint-disable */ //waring 제거용

import React , {useState} from "react";

const init = [
    {id:1,title:"코딩" ,done:false},
    {id:2,title:"운동" ,done:true},
    {id:3,title:"독서" ,done:false}
];



export default function SampleUseState08(){
    const [todos,setTodos] = useState(init);

    //수정
    const toggleTodo = (id) => {
        setTodos(prev=>
            prev.map(todo=>
                todo.id===id
                    ?{...todo,done:!todo.done}
                    :todo
            )
        )
    }

    console.log("update todos::" , todos);

    //삭제
    const removeTodo = (id)=>{
        setTodos(prev=>
            prev.filter(todo => todo.id !== id)
        )
    }



    // const remove = todos.filter((todo)=>{
    //     return todo.id!==targetId
    // });

    console.log("remove todos::",todos);

    return(
        <div style={{textAlign:"center", marginTop:40 }} >
            <h2>useState 심화-객체 리스트 관리</h2>
            <ul>
                {todos.map(todo => (
                <li key={todo.id} >
                    {todo.title}/완료:{todo.done?"0":"X"}
                    <button onClick={()=>toggleTodo(todo.id)}>토글</button>
                    <button onClick={()=>removeTodo(todo.id)}>삭제</button>
                </li>
                ))}
            </ul>
        </div>
    )
}