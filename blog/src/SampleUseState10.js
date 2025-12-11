/* eslint-disable */ //waring 제거용

import React , {useState} from "react"

const init=[
    {id:1,title:"식사",done:false},
    {id:2,title:"청소",done:false},
    {id:3,title:"빨래",done:false}
]

export default function SampleUseState10(){
    // todo 리스트 상태
    const [todos, setTodos] = useState(init);
    //input에 입력되는 제목 상태 
    const [title,setTitle] = useState("");
    //뷰 필터 상태 : all | done
    const [filter,setFilter] = useState("all");

    // 1) input 변경 핸들러
    const handleChange = (e) =>{
        setTitle(e.target.value);
        console.log("e.target.value::" , e.target.value);
    }

    // 2) 새 todo 추가
    const addTodo = () => {
        const trimmed = title.trim();
        if(trimmed === ""){
            alert("할일을 입력해 주세요");
            return;
        }

        const newTodo={
            id: Date.now(), //유니크 ID
            title:trimmed,
            done:false
        }

        setTodos((prev)=>[...prev,newTodo])// 배열 끝에 추가
        setTitle(""); //input 비우기
    }

    // 3) 완료 여부 toggle
    const toggleTodo = (id) => {
        setTodos((prev) => 
            prev.map((todo)=>
                todo.id === id
                    ?{...todo,done:!todo.done}
                    :todo
            )
        );
    };

    //4) 특정 todo 삭제
    const removeTodo = (id)=>{
        setTodos((prev)=> prev.filter((todo) => todo.id !== id ))
    }

    //5) 전체 삭제
    const clearAll = ()=>{
        if(!window.confirm("전체 삭제를 하시곘습니까??") ) return;
        setTodos([]);
    }

    //6) 완료된 것만 삭제
     const clearDone=()=>{
        if(!window.confirm("완료 항목 삭제")) return ; 
        setTodos((prev)=>prev.filter((todo)=> !todo.done)); 
     }

     //7)새로고침
     const resetAll=()=>{
        setTodos(init);
        setTitle("");
        setFilter("all");
     }

     //8) 화면에 보여줄 리스트 (필터)
     const visibleTodos = 
            filter === "all"
               ? todos
               : todos.filter((todo)=> todo.done)

    console.log("렌더링! 현재 todos:" , todos ,  "   filter::" , filter);

    return(
        <div style ={{textAlign:"center" , marginTop:40}} >
            <h2> usestate 종합 - Todo 리스트 (추가+toggle+삭제+filter)</h2>
            
            {/*입력 폼의 영역*/}
            <div style={{marginBottom:20}}>
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    placeholder="할일을 입력하세요"
                    style={{padding:"5px",width:"200px"}}
                />
                <button 
                    onClick={addTodo}
                    style={{marginLeft:"10px"}}
                >
                추가
                </button>
            </div>

            {/* 필터/삭제/리셋 버튼 영역 */}
            <div style={{marginBottom:20}} >
                <button 
                    onClick={()=>setFilter("all")}
                    style={{
                        marginRight: "10px",
                        fontWeight:filter ==="all"?"bold":"normal"
                    }}
                >
                전체보기
                </button>
                <button 
                    onClick={()=>setFilter("done")}
                    style={{
                        marginRight:"10px",
                        fontWeight:filter === "done" ? "bold" : "normal"
                    }}
                >
                    완료만 보기
                </button>

                <button 
                    onClick={clearAll}
                    style={{marginRight:"10px"}}
                >
                    전체삭제
                </button>

                <button 
                    onClick={clearDone}
                    style={{marginRight:"10px"}}
                >
                    완료만삭제
                </button>
                <button onClick={resetAll}>
                    새로고침
                </button>
            </div>

            {/*  리스트 영역 */}
            <ul style={{listStyle:"none",padding:0}} >
                {visibleTodos.map((todo) => (
                    <li 
                        key={todo.id}
                        style={{marginBottom:"10px"}}
                    >
                        <span 
                            style={{
                                textDecoration:todo.done ? "line-through" : "none"
                            }}
                        >
                            {todo.title} / 완료 {todo.done ? "O" : "X"}
                        </span>
                        <button 
                            onClick={()=>toggleTodo(todo.id)}
                            style={{marginLeft:"10px"}}
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