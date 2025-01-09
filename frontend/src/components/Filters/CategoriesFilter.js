import React, { useState } from 'react';
import './CategoriesFilter.css';

const CategoriesFilter = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ['Work', 'School', 'GYM', 'Life', 'Investments', 'Hobby'];

  const handleCategoryClick = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);
    onFilter(newSelectedCategories);
  };

  return (
    <div className='categoriesContainer'>
      <p className='titleFilters'>Categories</p>
      <span className='titleLineDecorative'></span>
      <div className='optionsContainerCategories'>
        {categories.map((category) => (
          <button
            key={category}
            className={`categoriesOption ${selectedCategories.includes(category) ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;