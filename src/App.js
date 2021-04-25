import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
