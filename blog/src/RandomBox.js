/*eslint-disable */
import React , {useState} from "react";

export default function RandomBox(){
    const [boxes,setBoxes] = useState([]);


    const addBox = () =>{
        const newBox ={
            id: Date.now(),
            size: Math.random() * 80 +20, //20 ~ 100px 랜덤박스 크기
            color:`hsl(${Math.random()*360}, 80% ,60% )`,
            x:Math.random()*300,
            y:Math.random()*300,
        }
        setBoxes((prev)=>[...prev,newBox]);
    };

    const clearBox = () =>{
        setBoxes([]);
    }


    return(
        <div style={{textAlign:"center",marginTop:40}}>
            <h2>랜덤박스 생성기</h2>
            <div style={{display:"flex" , gap:"10px",justifyContent:"center"  }} >
                <button onClick={addBox}>박스생성!</button>
                <button onClick={clearBox}>초기화!</button>
            </div>
            <div 
                style={{
                    position:"relative",
                    width: "400px",
                    height:"400px",
                    margin:"20px auto",
                    border:"2px solid #333",
                    background:"#111",
                    overflow:"hidden"
                }}
            >
            {boxes.map((box) => (
                <div
                    key={box.id}
                    style={{
                        position:"absolute",
                        width: box.size,
                        height: box.size,
                        background: box.color,
                        borderRadius: "8px",
                        left: box.x,
                        top: box.y,
                        transition:"all 0.3s ease"
                    }}
                />
            ))}
          </div>
        </div>
    );
}