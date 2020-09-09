import React from "react"
import ShoppingApp from "./components/ShoppingApp"

function App() {
  return (
    <div className="container my-3">
      <header className="App-header">
        <h1>Ma liste des courses</h1>
        <p>On va faire une shopping liste ! Yay !!</p>
      </header>
      <ShoppingApp />
    </div>
  )
}

export default App
