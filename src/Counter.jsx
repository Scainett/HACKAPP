

import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

  const increment = () => {
    setCount(prev => {
      const newCount = prev + 1
      setHistory(prevHistory => [...prevHistory, newCount])
      return newCount
    })
  }

  const decrement = () => {
    setCount(prev => {
      if (prev > 0) {
        const newCount = prev - 1
        setHistory(prevHistory => [...prevHistory, newCount])
        return newCount
      }
      return prev
    })
  }

  const reset = () => {
    setCount(0)
    setHistory([])
  }

  return (
    <div className="counter">
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      <div className="counter-buttons">
        <button className="btn decrement" onClick={decrement} disabled={count === 0}>
          Decrementar
        </button>
        <button className="btn increment" onClick={increment}>
          Incrementar
        </button>
      </div>

      <button className="btn reset" onClick={reset}>
        Reiniciar
      </button>

      {history.length > 0 && (
        <div className="history">
          <h3>Historial:</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
