<<<<<<< HEAD
//import logo from './logo.svg';
import './App.css';
import LoginPage from './login';
=======
>>>>>>> 27f8af342c5c6c41b4d648c1033765849f5820ee

import "./App.css";
import { Home  } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import Signpara from "./components/Signpara";
import Signsprov from "./components/Signsprov";





const App = () => {
  return (

    <div className="App">
<<<<<<< HEAD
      <LoginPage/>
    </div>
  );
=======
       
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/signpara" element={<Signpara />} />
          <Route exact path="/signsprov" element={<Signsprov />} />

          <Route exact path="/Signpara" element={<Signpara />} />

          
        </Routes>
      </BrowserRouter>


</div>
  )
>>>>>>> 27f8af342c5c6c41b4d648c1033765849f5820ee
}
export default App;


