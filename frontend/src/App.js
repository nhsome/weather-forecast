import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className={ classes.app }>
      <Header />
      <main>
        <ToastContainer />
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
