import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./data";

function App() {

  
  return (
    <div className="App" >
      <Header />
{data.map((item)=>  <Main {...item} />)}
    
    </div>
  );
}

export default App;
