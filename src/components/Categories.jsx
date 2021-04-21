import React from 'react';

const Categories = ({items, onClickItem}) => {
    const [activeItem, setActiveItem] = React.useState(null)

    onClickItem =(index)=>{
        setActiveItem(index)
    }

    return (
        <div className='categories'>
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все
                </li>
                {items && items.map((e, index) => {// проверка на undefined, если Items будет пустой, код будет продолжать работать
                        return (
                            <li onClick={() => setActiveItem(index)}
                                key={`${e}_${index}`}
                                className={activeItem === index ? 'active' : ''}
                            >{e}</li>
                        )
                    }
                )}
            </ul>
        </div>
    );
};

export default Categories;