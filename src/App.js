import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllPlaces from './pages/AllPlaces';
import NewPlace from './pages/NewPlace';
import Visited from './pages/Visited';

//stander js function but reurn jsx code
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllPlaces />
        </Route>
        <Route path='/newPlace'>
          <NewPlace />
        </Route>
        <Route path='/visited'>
          <Visited />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
