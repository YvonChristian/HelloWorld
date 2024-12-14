import { useState } from "react"

export const Incrementation = () => {

  //Using useState
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button className="btn btn-info" onClick={() => { setCounter(prevCounter => prevCounter + 1) }}>+1</button>
    </div>
  )
}
