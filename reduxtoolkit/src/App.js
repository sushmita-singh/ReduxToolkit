import logo from './logo.svg';
import './App.css';
import TodoSlice from './features/todo/todoSlice';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
