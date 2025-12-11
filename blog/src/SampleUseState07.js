/* eslint-disable */ //warning 제거용

import React , {useState} from "react";

//초기 리스트
const init =[
    {id:1, title:"코딩",done:false},
    {id:2, title:"운동",done:true}
]

export default function SampleUseState07(){
    const [todos , setTodos ] = useState(init)

    //리스트에 새 todo 추가
    const addTodo=()=>{
        const newTodo = {
            id: Date.now(), //유니크한 ID
            title:"중장비",
            done:false
        }
        setTodos(prev=> [...prev,newTodo]);
    }

    // 첫번째 Todo 삭제
    const removeTodo=()=>{
        setTodos(prev=>prev.slice(1));
    }

    const toggleTodo = (id) => {
        setTodos(prev => 
            prev.map(item =>
                item.id ===id?{...item,done:!item.done} : item
            )
        );
    };

    //전체 초기화
     const resetList=()=>{
        setTodos(init);
     }

     console.log("렌더링! 현재 todos :" , todos);

    return(
        <div style={{textAlign:"center",marginTop:40}}>
            <h2>useState 심화 - 객체 리스트 관리</h2>

            <ul style={{listStyle:"none", padding:0}}>
                {todos.map(todo => (
                    <li key={todo.id} style={{marginBottom: "10px"}}>
                        <span>
                            {todo.title}/ 완료 여부 :{todo.done?"0" : "X" }
                        </span>
                        <button
                            onClick={()=>toggleTodo(todo.id)}
                            style={{ marginLeft:"10px" }}
                        >
                            토글
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={addTodo}>new Todo add</button>
            <button onClick={removeTodo} style={{marginLeft:"10px"}}>first Todo remove</button>
            <button onClick={resetList} style={{marginLeft:"10px"}}>refresh </button>
        </div>
    );
}