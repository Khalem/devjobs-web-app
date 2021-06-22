import { Switch, Route } from 'react-router-dom';

// Local Components Imports
import Homepage from './pages/homepage/homepage.component';
import JobPost from './pages/job-post/job-post.component';

// Stylesheet imports
import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/:id(\d+)' component={JobPost} />
    </Switch>
  );
};

export default App;
