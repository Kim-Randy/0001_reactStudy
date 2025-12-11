import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>첫 React 프로젝트!(git연결)</h1>
        <button onClick={()=> setCount(count+1) }>
          클릭하면 증가 : {count}
        </button>
      </div>
    </>
  )
}

export default App
