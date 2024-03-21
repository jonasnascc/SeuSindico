import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './shared/components/Layout';
import { LoginPage } from './pages/LoginPage/Login';
import { SignupPage } from './pages/SignupPage/Signup';
import { HomePage } from './pages/HomePage/Home';
import { ImoveisPage } from './pages/ImoveisPage/Imoveis';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/imoveis' element={<ImoveisPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
