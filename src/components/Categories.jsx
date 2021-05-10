import React from 'react';
import PropTypes from "prop-types";


const Categories = React.memo(({items, onClickCategori, activeCategori}) => {
    return (
        <div className='categories'>
            <ul>
                <li className={activeCategori === null ? 'active' : ''}
                    onClick={() => onClickCategori(null)}>Все
                </li>
                {items && items.map((e, index) => {// проверка на undefined, если Items будет пустой, код будет продолжать работать
                        return (
                            <li onClick={() => onClickCategori(index)}
                                key={`${e}_${index}`}
                                className={activeCategori === index ? 'active' : ''}
                            >{e}</li>
                        )
                    }
                )}
            </ul>
        </div>
    );
});


Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategori: PropTypes.func.isRequired,
    // activeCategori: oneOfType([PropTypes.number, null])
}
Categories.defaultProps = {
    items: [],
    // activeCategori: null,
}


export default Categories;