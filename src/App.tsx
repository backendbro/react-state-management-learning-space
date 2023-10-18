import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Index from "./pages/Index"
import About from "./pages/About"


function App() {

  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/about/">Home</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" Component={Index}/>
      <Route path="/about" Component={About} />
    </div>
  </Router>
  )
}

export default App
