import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom';
import Email_confirmation from './components/Email_confirmation';
import Reset from './components/Reset';
import Changepass from './components/Changepass';
import Resetmsj from './components/Resetmsj';
import Browse from './components/Browse';
import Footer from './components/Footer';
import Services from './components/Services';
import PINconfirm from './components/PINconfirm';
import Profile from './components/Profile';
import Updateprofile from './components/Updateprofile';
import Protectedroutes from './components/Protectedroutes';


function App() {
  return (
    <div className="App">
        <Nav />
      <Routes>
        <Route path='/' element={
        <>
        <Home/>
        <Services />
        </>
        }>
        </Route>
        <Route path='/home' element={
        <>
        <Home/>
        <Services />
        </>
        }>
        </Route>
        <Route element={<Protectedroutes />}>

        <Route path='/email_confirmation' element={<Email_confirmation />}>
        </Route>
        <Route path='/pinconfirm' element={<PINconfirm />}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/updateprofile' element={<Updateprofile/>}></Route>

        </Route>
        <Route path='/changepass' element={<Changepass />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
        <Route path='/resetmsj' element={<Resetmsj />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        
        <Route path='/browse' element={<Browse />}></Route>
    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
