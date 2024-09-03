import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/authContext"
import Home from "./pages/Home"
import Tours from "./pages/Tours"
import Details from "./pages/Details"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tours" element={<Tours/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
