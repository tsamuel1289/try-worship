import './styles/App.scss';
import ShowSongs from './components/ShowSongs'
import Canciones from './components/Canciones'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Link to='/'>Home </Link>
        <Link to='/Canciones'>Canciones</Link>

        <Switch>
          <Route path='/Canciones'>
            <Canciones/>
          </Route>
          <Route path='/'>
            <ShowSongs/>
          </Route>
        </Switch>
      </Router>
    
    
    </>
  );
}

export default App;


    