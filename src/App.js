import { Switch, Route } from 'react-router-dom';

// Local Components Imports
import Homepage from './pages/homepage/homepage.component';
import JobPost from './pages/job-post/job-post.component';
import Header from './components/header/header.component';

// Stylesheet imports
import './App.scss';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/:id(\d+)' component={JobPost} />
      </Switch>
    </Fragment>
  );
};

export default App;
