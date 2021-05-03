import React from 'react';


const Categories = React.memo(({items, onClickItem}) => {
    const [activeItem, setActiveItem] = React.useState(null)
    const onSelectItem = (index) =>{
        setActiveItem(index)
        onClickItem(index)
    }
    console.log("rerender categories")
    return (
        <div className='categories'>
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>Все
                </li>
                {items && items.map((e, index) => {// проверка на undefined, если Items будет пустой, код будет продолжать работать
                        return (
                            <li onClick={() => onSelectItem(index)}
                                key={`${e}_${index}`}
                                className={activeItem === index ? 'active' : ''}
                            >{e}</li>
                        )
                    }
                )}
            </ul>
        </div>
    );
});

export default Categories;