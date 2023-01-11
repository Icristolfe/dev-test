import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LoginProf, LoginAluno, Inicio, Professor, PerfilProfessor, Aluno } from '../Container'
import PrivateRouteProfessor from './private-route-prof'
import PrivateRouteAluno from './private-route-aluno'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/proflogin" element={<LoginProf />} />
        <Route path="/alunologin" element={<LoginAluno />} />
        <Route path="/" element={<Inicio />} />
        <Route
          path="/professor"
          element={
            <PrivateRouteProfessor>
              <Professor />
            </PrivateRouteProfessor>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRouteProfessor>
              <PerfilProfessor />
            </PrivateRouteProfessor>
          }
        />

<Route
          path="/aluno"
          element={
            <PrivateRouteAluno>
              <Aluno />
            </PrivateRouteAluno>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
