/*eslint-disable*/ //warning 제거용

import React , {useState} from "react";

const init = [
    {id:1,title:"식사",memo:"아침 챙겨먹기",done:false},
    {id:2,title:"청소",memo:"거실 청소",done:false},
    {id:3,title:"빨래",memo:"티셔츠/수건 돌리기",donw:false}
];

export default function SampleUseState11(){
    //todo 리스트 상태
    const [todos,setTodos] = useState(init);
    //input에 입력되는 제목상태
    const [title,setTitle] = useState("");
    //memo 입력상태
    const [memo,setMemo] = useState("");
    //view 필터상태 : all | done
    const [filter , setFilter] = useState(true);


    //1) title input 변경 핸들러
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    //2)  memo input 변경 핸들러
    const handleMemoChange = (e) => {
        setMemo(e.target.value);
    };


    //4) 새 todo 추가 
    const addTodo=()=>{
        const trimmedTitle = title.trim();
        const trimmedMemo = memo.trim();

        if(trimmedTitle === ""){
            alert("할일을 입력해 주세여");
            return;
        }

        const newTodo = {
            id:Date.now(),
            title:trimmedTitle,
            memo:trimmedMemo,
            done:false
        };
        setTodos((prev)=>[...prev,newTodo]);//배열 끝에 추가
        setTitle(""); //Title 비우기
        setMemo("") //memo 비우기
    }



    //3) Enter 키로 추가 (title input에서 엔터 누르면 addTodo 실행)
    const handleKeyDown = (e) => {
        if(e.key==="Enter"){
            addTodo();
        }
    };



    // 5) 완료 여부 toggle
    const toggleTodo = (id) => {
        setTodos((prev)=>
            prev.map((todo)=>
                todo.id === id ? {...todo,done:!todo.done} : todo
            )
        );
    };

    // 6) 특정 todo 삭제
    const removeTodo = (id) => {
        setTodos((prev)=> prev.filter((todo)=> todo.id!==id))
    };

    // 7) 전체 삭제
    const clearAll = () => {
        if(!window.confirm("전체 삭제를 하시겠습니까?")) return;
        setTodos([]);
    }

    // 8) 완료된것만 삭제 (기존 기능 유지)
    const clearDone =() => {
        if(!window.confirm("완료 항목만 삭제하시겠습니까?")) return;
        setTodos((prev)=>prev.filter((todo)=>!todo.done));
    }

    // 9)미완료만 삭제 (새기능)
    const clearNotDone =()=>{
        if(!window.confirm("미완료 항목만 삭제하시겠습니까?")) return;
        setTodos((prev)=> prev.filter((todo)=>todo.done));
    };

    // 10) 새로고침 (초기 상태로 되돌리기)
    const resetAll =()=>{
        setTodos(init);
        setTitle("");
        setMemo("");
        setFilter("all");
    }

    // 11) 화면에 보여줄 리스트 (filter)
    const visibleTodos = filter === true ? todos :  todos.filter((todo)=> todo.done);

    return(
        <div style={{ textAlign:"center" , marginTop: 40}}>
            <h2>useState 종합 - Todo 리스트 업그레이트</h2>

            {/* 입력 폼 영역 */}
            <div style={{marginBottom:20}}>
                <div style={{marginBottom:8}}>
                    <input 
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        onKeyDown={handleKeyDown}//enter 추가
                        placeholder="할 일을 입력하세요"
                        style={{padding:"5px" , width:"200px"}}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={memo}
                        onChange={handleMemoChange}
                        onKeyDown={handleKeyDown}//enter 추가
                        placeholder="메모를 입력하세요(선택)"
                    />
                </div>
                <button 
                    onClick={addTodo}
                    style={{marginLeft:"10px",marginTop:"10px"}}
                >
                    추가
                </button>
            </div>
            {/* 필터/삭제/리셋 버튼영역 */}
            <div style={{marginBottom:20}}>
                <button 
                    onClick={()=> setFilter(true)}
                        style={{
                            marginRight:"10px",
                            fontWeight:filter === true ? "bold" : "normal"
                        }}
                >
                    전체보기
                </button>
                <button 
                    onClick={()=>setFilter(false)}
                    style={{
                        marginRight : "10px",
                        fontWeight:filter === false ? "bold" : "normal"
                    }}
                >
                    완료만 보기
                </button>

                <button onClick={clearAll} style={{marginRight:"10px"}}>
                    전체삭제
                </button>

                <button onClick={clearDone} style={{marginRight:"10px"}}>
                    완료만 삭제
                </button>

                <button onClick={clearNotDone} style={{marginRight:"10px"}}>
                    미완료만 삭제
                </button>

                <button onClick={resetAll}>새로고침</button>                   
            </div>
            {/*리스트 영역*/}
            <ul style={{listStyle:"none" , padding:0}} >
                {visibleTodos.map((todo)=>(
                    <li key={todo.id} style={{marginBottom:"10px"}}>
                        <span 
                            style={{
                                textDecoration: todo.done ? "line-through" : "none"
                            }}
                        >
                            {/* title + memo 같이 표시 */}
                            {todo.title}
                            {todo.memo ? `(${todo.memo})` : ""} / 완료:("")
                            {todo.done ? "O" : "X"}
                        </span>
                        <button
                          onClick={()=> toggleTodo(todo.id)}
                          style={{marginLeft:"10px"}}
                        >토글
                        </button>
                        <button 
                            onClick={() => removeTodo(todo.id) }
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