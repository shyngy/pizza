import React from 'react';
import {Categories, PizzaBlock, SortPopus} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory} from "../redux/actions/filters";

const categoriesItems = [
    "мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
]
const sortItems = [
    {name: "популярности", type: 'popular'},
    {name: "цена", type: 'price'},
    {name: "алфавиту", type: 'alphabet'}
]

let oldFunc = null

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({ pizzas, }) => pizzas.items);



    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    },[])

    console.log(onSelectCategory === oldFunc)
    oldFunc = onSelectCategory
    return (
        <div className="container">

            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoriesItems}/>
                <SortPopus items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((obj, index) => {
                    //console.log(index, obj.imageUrl)
                    return (
                        <PizzaBlock key={obj + index} {...obj}/>
                    )
                })}

            </div>
        </div>
    );
};

export default Home;