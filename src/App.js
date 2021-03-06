import React from 'react';
import MainPage from "./pages/MainPage";
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";
import Delivery from "./pages/Delivery";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Catalog from "./pages/Catalog";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                {/*ROUTER*/}

                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>

                        <Route exact path='/thanks'>
                            <Thanks/>
                        </Route>

                        <Route exact path='/delivery'>
                            <Delivery/>
                        </Route>

                        <Route exact path='/product'>
                            <ProductPage/>
                        </Route>

                        <Route exact path='/cart'>
                            <Cart/>
                        </Route>

                        <Route exact path='/order'>
                            <Order/>
                        </Route>

                        <Route exact path='/catalog'>
                            <Catalog title='Каталог — ECO SHOP'/>
                        </Route>

                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </Router>

                {/*ROUTER*/}

                <Footer/>
            </div>
        );
    }
}

export default App;
