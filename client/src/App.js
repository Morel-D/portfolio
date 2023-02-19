import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import MyApp from "./Components/Views/MyApp";


function App() {



  return (
    <BrowserRouter>
        <Routes>    
            <Route path="/"  element={<MyApp />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
