import './App.scss'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NoPage } from './pages/NoPage'

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/*'} element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
