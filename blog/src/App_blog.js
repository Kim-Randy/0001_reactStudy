/* eslint-disable */  //warning 제거
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  let post = '역삼 우동 맛집'
  let [title,setTitle] =  useState(['남자코드추천','강남우동맛집','파이썬독학']);
  let logo  =  '블로그임아무튼블로그임';
  let [count , setCount ]  = useState(0);

  return (
    <div className="App">
        <div className='black-nav' >
            <h4>{logo}</h4>
        </div>
        <h4>{post}</h4>
        <div className='list' >
            <h4>{title[0]} <span onClick={ ()=>setCount(count+1)}  >👍</span>({count})  </h4>
            <p>2월 17일 발행</p>
            <h4>{title[1]} <span onClick={ ()=> {
                let copyTitle = [...title];//reference data type
                console.log('copyTitle::',copyTitle);
                copyTitle[0] = '여자코드추천';
                setTitle(copyTitle);
            }   } > 🤞 </span>  </h4>
            <p>2월 18일 발행</p>
            <h4>{title[2]}<span onClick={()=>{
              let titleCopy = [...title];
//              let copyTitle = [2,1,3,10];
              titleCopy.sort((a,b)=>{
                return a- b //오름차순 정렬
              });
              setTitle(titleCopy);
              }
            } >😍</span>
            </h4>
            <p>2월 19일 발행</p>
        </div>
        <ShowMoal/>
    </div>
  );
}


function ShowMoal(){
  return (
    <>
    <div className='modal' >
      <h4>제목</h4>
        <p>내용</p>
        <p>상세내용</p>
    </div>
    <div>
    </div>
   </>    
  )
}

export default App;
