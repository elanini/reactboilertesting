import React from 'react'
import { render } from 'react-dom'
import Home from './Home';
import About from './About';
import TodoBox from './TodoBox';

// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

// Then we delete a bunch of code from App and
// add some <Link> elements...
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})
export default class Router extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={About} />
          <Route path="about" component={About} />
          <Route path="todo" component={TodoBox}/>
        </Route>
      </Router>
    );
  }
}