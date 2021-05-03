import React from 'react';

const SortPopup = React.memo(({items}) => {
    // console.log(items)
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const [activeItem, setActivePopup] = React.useState(0)
    const activeLabel = items[activeItem].name
    const onSelectItem = (index) =>{
        setActivePopup(index)
        setVisiblePopup(false)
    }
    const sortRef = React.useRef()
    // console.log(sortRef.current)

    // {1} простая функция создается вне, для более оптимизированной работы кода
    const toggleVisblePopup = () => setVisiblePopup(!visiblePopup)




    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
            console.log('outside')
        }
        // const sortLabel = document.body.querySelector("div.sort__label")
        // //console.log(e.path)
        // if (e.path[1] === sortLabel) {
        //     console.log('this sort label')
        // } else {
        //     setVisiblePopup(false)
        // }

    }

    React.useEffect(() => {
            document.body.addEventListener("click", handleOutsideClick)
            // console.log(sortRef)
        }
        , [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated': ''}
                    width="10"
                    height="6"
                    // viewBox = 0 0 10 6
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                {/* {1} создание анонимной функции тут приводит к повторному выполнению функции несколько раз во время рендера */}
                <span onClick={toggleVisblePopup}>{activeLabel}</span>
            </div>

            {visiblePopup && <div className="sort__popup">  {/*если visble popup false && не выполнит этот блок*/}
                <ul>
                    {items && items.map((e, index) => {// проверка на undefined, если Items будет пустой, код будет продолжать работать
                            return (
                                <li onClick={() => onSelectItem(index)}
                                    key={`${e.type}_${index}`}
                                    className={activeItem === index ? 'active' : ''}
                                >{e.name}</li>
                            )
                        }
                    )}
                </ul>
            </div>}
        </div>
    );
});

export default SortPopup;