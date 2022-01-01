import './App.css';
import groceries from './groceries.jpg';
import { GroceryList } from './GroceryList';
import man from './man.jpg';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={groceries} width="200px" alt="groceries" />
      </div>
      <h1 className='container'>Grocery List</h1>
      <GroceryList />
      <div className='container'>
        <img src={man} width="200px" alt="list man" />
      </div>
    </div>
  );
}

export default App;
