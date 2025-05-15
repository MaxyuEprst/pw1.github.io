import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ul>
          <li>первый</li> 
          <li>второй</li> 
          <li>третий</li> 
          <li>четверый</li>  
        </ul>
    </>
  )
}

export default App
