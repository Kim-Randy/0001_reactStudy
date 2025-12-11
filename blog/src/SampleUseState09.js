/*esline-disable */ //waring 제거용

import React , {useState} from "react";

const init = [
    {id:1, title:"코딩",done:false},
    {id:2, title:"운동",done:true},
    {id:3, title:"독서",done:false}
]

export default function SampleUseState09(){
    // todo 리스트 상태
    const [todos, setTodos] = useState(init);
    // input에 입력되는 제목 상태
    const [title, setTitle] = useState("");

    //1) input 변경 핸들러
    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    //2) 새 todo 추가
    const addTodo =()=>{
        const trimmed = title.trim();
        if(trimmed ===""){
            alert("할 일을 입력해 주세요!");
            return;
        }

        const newTodo={
            id: Date.now(), //유니크ID
            title:trimmed,
            done:false
        };
        setTodos((prev)=>[...prev,newTodo]);// 배열 끝에 추가
        setTitle(""); //input 비우기
    };

    //3) 완료여부toggle
    const toggleTodo=(id)=>{
        setTodos((prev)=>
            prev.map((todo) =>
                todo.id === id
                    ?{...todo,done:!todo.done}
                    : todo
            )
        );
    };
    //4) 특정 todo 삭제
    const removeTodo = (id) => {
        setTodos((prev)=>prev.filter((todo)=> todo.id !== id));
    };

    console.log("렌더링! 현재 todos:", todos);


    return(
        <div style={{textAlign:"center",marginTop:40}}>
            <h2>  useState 종합 - Todo 리스트 (추가+토글+삭제)</h2>
            {/* 입력 홈 영역 */}
            <div style={{marginBottom:30}} >
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    placeholder="할 일을 입력하세요"
                    style={{padding:"5px",width:"200px"}}
                />
                <button
                    onClick={addTodo}
                    style={{marginLeft:"10px"}}
                >
                추가
                </button>
            </div>
          
          {/*리스트 영역*/}
          <ul style={{ listStyle:"none" ,padding:0 }}>
            {todos.map((todo) =>(
                <li key={todo.id}
                    style={{
                        marginBottom:"10px"
                    }}
                >
                    <span
                        style={{textDecoration:todo.done?"line-through" : "none"}}
                    >
                        {todo.title}/ 완료 : {todo.done?"O":"X"}
                    </span>
                    <button
                      onClick={()=>toggleTodo(todo.id) }
                      style={{ marginLeft:"10px" }}
                    >
                     토글   
                    </button>
                    <button
                        onClick={()=>removeTodo(todo.id)}
                        style={{marginLeft:"10px"}}
                    >
                        삭제
                    </button>
                </li>
            ))}
          </ul>
        </div>
    );
}
