import './styles/App.scss';
import Navigation from './components/Navigation'
import ShowSongs from './components/ShowSongs'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/Canciones'>Caniones</Link>

        <Switch>
          <Route path='/Canciones'>
            
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


    