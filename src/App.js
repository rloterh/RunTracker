import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  </Router>
);

export default App;
