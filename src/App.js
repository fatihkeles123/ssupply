import React, { Component } from 'react';
import Articles from './containers/Articles/Articles';
import Categories from './containers/Categories/Categories';
import { Route, Switch } from 'react-router-dom';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';

class App extends Component {
  render() {
    return (
        <div>
          <NavigationItems />
          <Switch>
            <Route path="/categories" exact component={Categories} />
            <Route path="/article-detail" component={props => <Articles {...props} />} />
            <Route path="/articles" component={props => <Articles {...props} />} />
            <Route path="/add-article" component={props => <Articles {...props} />} />
            <Route path="/" component={props => <Articles {...props} />} />
          </Switch>
        </div>
    );
  }
}

export default App;
