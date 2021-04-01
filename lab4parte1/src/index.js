import  React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import Contenido from './Contenido.js'

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [all, setAll ] = useState(0)
  const [average, setAverage ] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+0.1)
    setPositive(((good+1)*100)/(all+1))
  }
  const onClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAverage(average+0.1)
    setPositive(((neutral+1)*100)/(all+1))
  }
  const didClick = () => {
    setBad(bad +1)
    setAll(all+1)
    setAverage(average+0.1)
    setPositive(((bad+1)*100)/(all+1))
  }
 
  return (
    <div>
      <button onClick={handleClick}>good</button>
      <button onClick={onClick}>neutral</button>
      <button onClick={didClick}>bad</button>
      <Contenido 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      all = {all}
      average = {average}
      positive = {positive}
      />
      
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root'))