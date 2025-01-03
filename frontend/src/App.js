
import './App.css';

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
            <div className='statusContainer'>
              <p className='titleFilters'>
                Status
              </p>
              <span className='titleLineDecorative'></span>
              <div className='optionsContainer'>
                <button className='statusOption statusComplete'>
                  Complete
                </button>
                <button className='statusOption statusProgress'>
                  In Progress
                </button>
                <button className='statusOption statusPending'>
                  Pending
                </button>
              </div>
            </div>
            <div className='categoriesContainer'>
              <p className='titleFilters'>
                Categories
              </p>
              <span className='titleLineDecorative'></span>
              <div className='optionsContainerCategories'>
                <button className='categoriesOption'>
                  Work
                </button>
                <button className='categoriesOption'>
                  School
                </button>
                <button className='categoriesOption'>
                  GYM
                </button>
                <button className='categoriesOption'>
                  Life
                </button>
                <button className='categoriesOption'>
                  Investments
                </button>
                <button className='categoriesOption'>
                  Hobby
                </button>
              </div>
            </div>
          </div>
          <div className='tableContainer'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
