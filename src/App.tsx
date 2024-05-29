import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './shared/components/Layout/Layout';
import { LoginPage } from './pages/LoginPage/Login';
import { SignupPage } from './pages/SignupPage/Signup';
import { HomePage } from './pages/HomePage/Home';
import { ImoveisPage } from './pages/ImoveisPage/Imoveis';
import { ImovelFormPage } from './pages/ImovelFormPage/ImovelFormPage';
import { AuthPage } from './shared/components/Auth/AuthPage';
import { RequireAuth } from './context/auth/RequireAuth';
import { Espacos } from './pages/EspacosPage/Espacos';
import { AluguelPage } from './pages/AluguelPage/AluguelPage';

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
          <Route path='/imoveis'>
            <Route index element={<ImoveisPage/>} />
            <Route path='add' element={<ImovelFormPage/>}/>
            <Route path='edit' element={<ImovelFormPage/>}/>
            <Route path='espacos' element={<Espacos/>}/>
            <Route path='espacos/alugar' element={<AluguelPage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
