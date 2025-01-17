import './App.css';
import CategoriesFilter from './components/Filters/CategoriesFilter';
import TaskList from './components/TaskList';
import StatusFilter from './components/Filters/StatusFilter';
import { useState } from 'react';

function App() {
  // Estados para el filtro
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Funciones para actualizar el filtro de estado y categoría
  const handleStatusFilterChange = (status) => {
    setSelectedStatus(status); // Actualiza el filtro de estado
  };

  const handleCategoryFilterChange = (category) => {
    setSelectedCategory(category); // Actualiza el filtro de categoría
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='headerContainer'>
          <h2 className='header-title'>ToDo-List</h2>
          <div className='headerLinks'>
            <ul>
              <li>
                correo
              </li>
              <li>linkedin</li>
              <li>git hub</li>
            </ul>
          </div>
        </div>
      </header>
      <div className='generalContainer'>
        <h1 className='generalTitle'>Task</h1>
        <div className='componentsContainer'>
          <div className='filtersContainer'>
            <StatusFilter filterTasks={handleStatusFilterChange} />
            <CategoriesFilter filterCategories={handleCategoryFilterChange} />
          </div>
          <div className='tableContainer'>
            <TaskList status={selectedStatus} category={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
