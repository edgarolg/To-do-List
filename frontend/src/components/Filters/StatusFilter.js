import React, { useState } from 'react';
import './StatusFilter.css';

const StatusFilter = ({ filterTasks }) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    filterTasks(status);
  };

  return (
    <div className='statusContainer'>
      <p className='titleFilters'>
        Status
      </p>
      <span className='titleLineDecorative'></span>
      <div className='optionsContainer'>
        <button 
          className={`statusOption ${selectedStatus === 'Complete' ? 'active' : ''}`} 
          onClick={() => handleStatusClick('Complete')}
        >
          Complete
        </button>
        <button 
          className={`statusOption ${selectedStatus === 'In Progress' ? 'active' : ''}`} 
          onClick={() => handleStatusClick('In Progress')}
        >
          In Progress
        </button>
        <button 
          className={`statusOption ${selectedStatus === 'Pending' ? 'active' : ''}`} 
          onClick={() => handleStatusClick('Pending')}
        >
          Pending
        </button>
      </div>
    </div>
  );
};

export default StatusFilter;