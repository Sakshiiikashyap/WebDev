import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)

  //runs only once when this component mounts
  useEffect(() => {
    alert("Welcome to my page")
  }, [])

  //we can use this effect as many time as we want and can link it to diff count

  //uses when we want change in particular prompt
  useEffect(() => {
    alert("Count was changed")
  }, [count])

  useEffect(() => {
    alert("First was changed")
  }, [first])

  return (
    <>
    <Navbar color={"navy" + "Blue"}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
