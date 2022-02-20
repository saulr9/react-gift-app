import './App.css';
import List from './components/Category/List';

const defaultCategories = ['Dragon Ball', 'Naruto', 'One Punch Man'];
function App() {
  return (
    <div className="App">
      <List defaultCategories={defaultCategories} />
    </div>
  );
}

export default App;
