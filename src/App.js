import React from 'react'
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart, } from "./pages";
import './app.scss'



const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <div className="content">
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        </div>
    );
}

export default App;
