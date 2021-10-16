import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { TodoList } from './features/todoList/TodoList';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='headerDiv'>
          <h2>任務列表</h2>
        </div>
        <Navbar />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <TodoList filter="none" />
                </div>
              )}
            />
            <Route
              exact
              path="/incomplete"
              render={() => (
                <div>
                  <TodoList filter="incomplete" />
                </div>
              )}
            />
            <Route
              exact
              path="/completed"
              render={() => (
                <div>
                  <TodoList filter="completed" />
                </div>
              )}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
