import logo from './logo.svg';
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/ToDoList/ToDoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoList />
    
    </div>
  );
}

export default App;
