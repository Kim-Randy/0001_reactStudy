/* eslint-disable */
import React , {useState , useMemo} from "react";

export default function SampleUseMemo02(){
    const [keyWord , setKeyWord] = useState("");
    const [count , setCount] = useState(0);

    //아주 큰 리스트라고 가정 (여기선 10,000개 가정)
    const bigList = useMemo(()=>{
        const arr = [];
        for(let i=0;i<10000;i++){
            arr.push({id:i,text:"item :: " + i})
        }
        return arr;
    }, []);
    //처음 한 번만 생성(이것도 useMemo)

    //검색어 기반 filter
    const filteredList = useMemo(()=>{
        console.log("필터링 실행됨");
        return bigList.filter((item)=>
            item.text.toLowerCase().includes(keyWord.toLowerCase())
        );
    }, [keyWord,bigList]);
    // keyWord or bigList 바뀔 때만 필터링

    // add  filter 기능만 추가
    const ab = (e) => {
        return bigList.filter((item)=>
            item.text.toLowerCase().includes(keyWord.toLowerCase())
        );
    }
    

    return(
        <div style={{ textAlign : "center" , marginTop : 40 }}>
            <h2>useMemo-배열 필터링 최적화</h2>
            <div>
                <input 
                    value={keyWord}
                    onChange={(e)=>setKeyWord(e.target.value)}
//                    onChange={(e)=>ab(e)}
                    placeholder="검색어 입력"
                />
            </div>

            <button 
                onClick={()=>setCount((prev)=>prev+1)}
                style={{marginTop:"20px"}}
            >
                count+1
            </button>

            <p>count : {count}</p>
            <p>검색 결과 : {filteredList.length} 개</p>

            <ul style={{height:"200px", overflow:"auto",listStyle:"none"}}>
                {filteredList.map((item)=>(
                    <li key={item.id} >{item.text}</li>
                ))}
            </ul>
        </div>
    );
}