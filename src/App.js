import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StartTestButton from './components/StartTestButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { auth } from './firebase';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import AddText from './components/AddText';
import axios from 'axios';

function App() {

  const [ userLoggedIn, setUserLoggedIn ] = useState(false);
  const [ isAdmin, setIsAdmin ] = useState(false);
  const [ userName, setUserName ] = useState("");
  let userEmail='';

  useEffect( () => {
    auth.onAuthStateChanged( (user) => {
      if(user) {
        setUserLoggedIn(true);
        setUserName(user.displayName);
        userEmail = user.email;
      }
      else {
        setUserLoggedIn(false);
        setUserName("");
      }
      axios.post("https://typingspeedtestbackend-production.up.railway.app/api/admin", {
        email: userEmail
      })
      .then( (response) => {
        setIsAdmin(response.data);
      }).catch( err => console.log(err))
    })
  }, []);

  return (
      <BrowserRouter>
          <Navigation name= {userName} isAdmin= {isAdmin}/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/starttest" element={ userLoggedIn ? <StartTestButton/> : <Login/>}/>
            <Route path="/addtext" element={ isAdmin? <AddText/> : <NotFound/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
  );
}

export default App;
