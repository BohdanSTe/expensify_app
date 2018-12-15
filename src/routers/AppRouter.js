import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Tasks from '../components/Tasks/Tasks';
import Goals from '../components/Goals/Goals';
import Expenses from '../components/Expenses/Expenses';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/tasks" exact={true} component={Tasks} />
                <Route path="/goals" exact={true} component={Goals}/>
                <Route path="/expenses" exact={true} component={Expenses} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;