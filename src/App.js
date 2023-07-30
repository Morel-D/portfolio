import { Route, Routes, BrowserRouter} from "react-router-dom";
import MyApp from "./Components/Views/MyApp";


function App() {



  return (
    <BrowserRouter>
        <Routes>    
            <Route path="/portfolio"  element={<MyApp />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
