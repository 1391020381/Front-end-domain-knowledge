import { useState } from 'react'
import './App.css'

import { Button } from './components/user/Button'

function App() {
  const [count, setCount] = useState(0)
  const clickFuc = ()=>{
    console.log('23234234')
    setCount((count) => count + 1)
  }
  return (
    <div>
      <Button text={'count is '} count={count}  fuc ={clickFuc}>
          
        </Button>
    </div>
  )
}

export default App
