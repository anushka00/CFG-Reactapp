
import "./App.css";
import { Home  } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import Signpara from "./components/Signpara";




const App = () => {
  return (

    <div className="App">
       
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Signpara" element={<Signpara />} />
          
        </Routes>
      </BrowserRouter>


</div>
  )
}

export default App;
