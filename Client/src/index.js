import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Signin from './pages/signin';
import Register from './pages/register';
import RootLayout from './layouts/RootLayout';
import Error from './pages/error';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Search from './pages/search';
import Messages from './pages/messages';

const isAuth = window.localStorage.getItem('isAuth');
console.log(isAuth, "logged in");

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route path='/' element={<App/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<App/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/messages' element={<Messages/>}/>
    <Route path='*' element={<Error/>}/>
  </Route>

))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;