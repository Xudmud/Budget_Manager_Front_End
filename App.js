import React, { Component } from 'react';
import './App.css';
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Provider store={store}>
            <HashRouter>
              <div>
                <MovieHeader />
                <Route exact path="/" render={()=><Authentication />}/>
                <Route path="/signin" render={()=><Authentication />}/>
              </div>
            </HashRouter>
          </Provider>
        </div>
    );
  }
}
