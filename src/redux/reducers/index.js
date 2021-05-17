import {combineReducers} from "redux";

import filters from "./filters"; //filtersReducer
import pizzas from "./pizzas";   //pizzasReducer
import cart from "./cart";


const rootReducer = combineReducers({
    filters, // this: filters: filters
    pizzas, // es6 syntax
    cart,
})






// const rootReducer = combineReducers({
//     filters: filtersReducer,
//     pizzas: pizzasReducer,
// });

export default rootReducer