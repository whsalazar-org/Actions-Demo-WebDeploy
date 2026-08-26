import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <img src={reactLogo} className="logo" alt="React logo" width="96" height="96" />
      <h1>Actions Demo Web Deploy</h1>
      <p>A simple React + TypeScript app deployed with GitHub Actions.</p>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((current) => current + 1)}
      >
        Count is {count}
      </button>
    </main>
  )
}

export default App
