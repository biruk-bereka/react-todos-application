import { BrowserRouter } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  );
}

export default App;
