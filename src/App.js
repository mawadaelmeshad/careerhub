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
       <Nav />
     <Routes>
        <Route path='/' element={
        <>
        <Home/>
        </>
        }>
        </Route>

        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
