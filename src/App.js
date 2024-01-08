import {Navbar} from "./components/Navbar";
import {HomePage} from "./components/HomePage";
import {AboutUs} from "./components/AboutUs";
import {Contacts} from "./components/Contacts";
import {Route, Routes} from "react-router-dom";
import {SinglePost} from "./components/SinglePost";
import {Posts} from "./components/Posts";
import {RequireAuth} from "./components/hoc/RequireAuth";
import {Login} from "./components/Login";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/posts" element={
                <RequireAuth>
                    <Posts/>
                </RequireAuth>}/>
            <Route path="/posts/:id" element={<SinglePost/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
