
import './App.css';
import CategoriesFilter from './components/Filters/CategoriesFilter';
import TaskList from './components/TaskList';
import StatusFilter from './components/Filters/StatusFilter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='headerContainer'>
          <h2 className='header-title'>ToDo-List</h2>
          <div className='headerLinks'>
            <p>aqui van mis links de correo, linkedin, git hub</p>
          </div>
        </div>
      </header>
      <div className='generalContainer'>
        <h1 className='generalTitle'>Task</h1>
        <div className='componentsContainer'>
          <div className='filtersContainer'>
            <StatusFilter />
            <CategoriesFilter />
          </div>
          <div className='tableContainer'>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
