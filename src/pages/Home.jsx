import React from 'react';
import {Categories, PizzaBlock, SortPopus} from "../components";



const Home = ({items}) => {

    //console.log(items)
    return (
        <div className="container">

            <div className="content__top">
                <Categories
                    onClickItem={(e) => {
                        console.log(e)
                    }}
                    items={[
                        "мясные",
                        "Вегетарианская",
                        "Гриль",
                        "Острые",

                    ]}/>
                <SortPopus items={
                    [
                        {name: "популярности", type: 'popular'},
                        {name: "цена", type: 'price'},
                        {name: "алфавиту", type: 'alphabet'}
                    ]
                }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj, index) => {
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