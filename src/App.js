import Counter from "./components/Counter";
import classes from './App.module.css'
function App() {
  return (
    <div className={classes.App}>
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
