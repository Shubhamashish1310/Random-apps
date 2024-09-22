
import Home from './Home/home'
import { Route, Routes } from 'react-router-dom'
import RandomColour from './Pages/RandomColour'
import Todolist from './Pages/Todolist'

function App() {
  return (
    <div>
       <Routes>
          <Route path="/randomcolour" element={<RandomColour/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Todolist" element={<Todolist/>} />
          <Route path='*' element={<Home />}/>
       </Routes>
    </div>
  )
}

export default App