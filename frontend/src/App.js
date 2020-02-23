import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Header />
      <main className="app__content">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route component={ NotFound } />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
