import React from 'react'
import './app.scss'
import axios from 'axios'
import {connect} from "react-redux";
import {Route} from "react-router-dom";



import {Header} from "./components";
import {Home, Cart,} from "./pages";

import {setPizzas} from "./redux/actions/pizzas";
import store from "./redux/store";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
const lsess = null
// function App() {
//     const [pizzas, setPizzas] = React.useState([])
//
//
//     React.useEffect(()=>{
//         axios.get('http://localhost:3000/db.json').then(({data})=>{
//             setPizzas(data.pizzas)
//         })
//         // fetch('http://localhost:3000/db.json').then((resp)=>{
//         //     return resp.json()
//         // }).then((json)=>{
//         //     setPizzas(json.pizzas)
//         // })
//     },[])
//
//
//     return (
//         <div className="App">
//             <div className="wrapper">
//                 <Header/>
//
//                 <div className="content">
//                     <Route path="/" render={()=><Home items={pizzas}/>} exact/>
//                     <Route path="/cart" component={Cart} exact/>
//
//
//                 </div>
//             </div>
//         </div>
//     );
// }

class App extends React.Component{

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            console.log(data)
            store.dispatch(setPizzas(data.pizzas))
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <div className="wrapper">
                    <Header/>

                    <div className="content">
                        <Route path="/" render={()=><Home items={this.props.items}/>} exact/>
                        <Route path="/cart" component={Cart} exact/>


                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProp = (state) => {
    // console.log(state, 'hello map state to props')
    return{
         items:state.pizzas.items
    }
}

export default connect(mapStateToProp)(App);
