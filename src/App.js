import logo from "./logo.svg";
import "./App.css";
import { Options, Loader, User } from "./store/containers";

const App = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ height: 150 }}>
          <Loader />
          {children}
        </div>
        <Options />
        <User />
        <User />
      </header>
    </div>
  );
};

export default App;
