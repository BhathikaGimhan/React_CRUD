import './App.css';
import Read from './pages/Read';

function App() {
  const mystyle = {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  return (
    <div className="App">
    <h1 style={mystyle}>CRUD</h1>
      <header className="App-header">
        <Read />
      </header>
    </div>
  );
}

export default App;
