import React from 'react'
import './app.scss'
import axios from 'axios'
import { useDispatch} from "react-redux";
import {Route} from "react-router-dom";



import {Header} from "./components";
import {Home, Cart,} from "./pages";

import {setPizzas} from "./redux/actions/pizzas";

const App = () =>{
    window.testFunc = ()=>{
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    }
    const dispatch = useDispatch()
    React.useEffect(()=>{
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    },[])

    return (
        <div className="App">
            <Header/>
            <div className="wrapper">


                <div className="content">
                    <Route path="/" component={Home}  exact/>
                    <Route path="/cart" component={Cart} exact/>


                </div>
            </div>
        </div>
    );
}

export default App;
