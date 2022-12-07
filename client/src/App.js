import Content from "./Components/Views/Content";
import Navigation from "./Components/Views/Navigation";

function App() {
  return (
    <div className="App">
      <div className="header">
         <Navigation />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
