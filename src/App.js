import "./App.css";
import Contacts from "./components/contacts";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-9 offset-md-2">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
