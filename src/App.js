import {Navbar} from "./components/Navbar";
import {HomePage} from "./components/HomePage";
import {AboutUs} from "./components/AboutUs";
import {Contacts} from "./components/Contacts";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </div>
  );
}

export default App;
