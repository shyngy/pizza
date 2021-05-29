import React from 'react';
import {Categories, PizzaBlock, SortPopus, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";



const categoriesItems = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
]

const sortItems = [
    {name: "популярности", type: 'popular', order: 'desc'},
    {name: "цена", type: 'price', order: 'desc'},
    {name: "алфавиту", type: 'name', order: 'asc'}
]


const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    console.log('rerender')
    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };

    
    return (
        <div className="container">

            <div className="content__top">
                <Categories
                    activeCategori={category}
                    onClickCategori={onSelectCategory}
                    items={categoriesItems}/>


                <SortPopus items={sortItems}
                           activeSortType={sortBy.type}
                           onClickSortType={onSelectSortType}

                />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => < PizzaBlock
                        onClickAddPizza={handleAddPizzaToCart}
                        key={obj.id}
                        {...obj}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].length}/>)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index}/>)}
            </div>
        </div>

    );
};

export default Home;