import React, { Component } from 'react';
import {hot} from "react-hot-loader";
import { createStore } from 'redux';
import "./App.css";

import AppRouter from './routers/AppRouter';
import tasksReducer from './reducers/tasks';

const initialState = {tasks: [
    {
        task: 'study React',
        done: false,
    },
    {
        task: 'clean house',
        done: false
    },
    {
        task: 'go to gym',
        done: false
    }
]};
const store = createStore(tasksReducer, initialState);

class App extends Component{
    render() {
        return(
            <AppRouter />
        );
    }
}

export default hot(module)(App);