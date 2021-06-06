import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/" component={Navbar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
