import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Header from './components/common/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Post from './components/Post/Post';

function App() {
  return (
    
    <div className="App">
    
     <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={
          <Login/>
        }
          />
           <Route path='/register' element={
          <Register/>
        }
          />
           <Route path='/dash' element={
          <Dashboard/>
        }
          />
            <Route path='/post' element={
          <Post/>
        }
          />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
