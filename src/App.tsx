import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './shared/components/Layout';
import { LoginPage } from './pages/LoginPage/Login';
import { SignupPage } from './pages/SignupPage/Signup';
import { HomePage } from './pages/HomePage/Home';
import { ImoveisPage } from './pages/ImoveisPage/Imoveis';
import { AddImovel } from './pages/ImoveisPage/AddImovel';
import { AuthPage } from './shared/components/Auth/AuthPage';
import { RequireAuth } from './context/auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<AuthPage/>}>
            <Route index element={<LoginPage/>}/>
          </Route>
          <Route path='/signup' element={<AuthPage/>}>
            <Route index element={<SignupPage/>}/>
          </Route>
          <Route path='/imoveis' element={<RequireAuth/>}>
            <Route index element={<ImoveisPage/>} />
            <Route path='adicionar' element={<AddImovel/>}/>
            <Route path='editar' element={<AddImovel/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
