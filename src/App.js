import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/teams/:teamName/matches/:year">
              <MatchPage />
            </Route>
            <Route path="/teams/:teamName">
              <TeamPage />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
