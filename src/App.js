import logo from './logo.svg';
import './App.css';
import Cabin1 from './components/Cabin 1';

function App() {
  const cabins = ['Cabin 1', 'Cabin 2', 'Cabin 3', 'Cabin 4', 'Cabin 10', 'Cabin 11', 'Room 1', 'Room 2','Room 3','Room 4',]
  const options = ['Checked Out/Dirty', 'Occupied', 'Clean Immediately', 'Ready']
  return (
    <div className="App">
      <header className="App-header">
        <Cabin1 options={options}/>
        {/* {cabins.map(cabin => {
          return(
            <div>
              <h1>{cabin}</h1>
              <label for ="options">Set Status</label>
              <select name="options" id="options">
                <option>Checked Out/Dirty</option>
                <option>Occupied</option>
                <option>Clean Immediately</option>
                <option>Ready</option>
              </select>

            </div>
          )
        })} */}
      </header>
    </div>
  );
}

export default App;
