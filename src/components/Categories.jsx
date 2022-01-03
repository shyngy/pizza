import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((e, index) => {
            // если Items будет пустой, код будет продолжать работать
            return (
              <li
                onClick={() => onClickCategory(index)}
                key={`${e}_${index}`}
                className={activeCategory === index ? 'active' : ''}
              >
                {e}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
  // activeCategory: oneOfType([PropTypes.number, null])
};
Categories.defaultProps = {
  items: [],
  // activeCategory: null,
};

export default Categories;
