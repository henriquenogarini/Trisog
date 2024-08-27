import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Tours from "./pages/Tours"
import Details from "./pages/Details"
import Login from "./pages/Login"

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tours" element={<Tours/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
