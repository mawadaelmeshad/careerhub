import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={
        <>
        <Nav />
        <Home/>
        <Signin />
        <Signup />
        </>
        }>
        </Route>

        <Route path='/signin' element={<Signin />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
