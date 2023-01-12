import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import ContactState from './context/contact/ContactState';
import AuthState from './context/alert/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
            
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/about' element={<About />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
                  
                </Routes>
              
              </div>
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;