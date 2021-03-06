import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/home'
import ReactTrainingLayout from './pages/react'
import JavaScriptTrainingLayout from './pages/modern-javascript'
import WebDevTrainingLayout from './pages/modern-web-development'
import ReduxTrainingLayout from './pages/redux'
import Navbar from './components/navbar'
import HelloWorldPage from './pages/hello-world'
import TestingSpas from './pages/testing-spas'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/react/:page" component={ReactTrainingLayout} />
      <Route
        path="/modern-javascript/:page"
        component={JavaScriptTrainingLayout}
      />
      <Route path="/html-basics/:page" component={HelloWorldPage} />
      <Route
        path="/modern-web-development/:page"
        component={WebDevTrainingLayout}
      />
      <Route path="/redux/:page" component={ReduxTrainingLayout} />
      <Route path="/testing-spas/:page" component={TestingSpas} />
    </Router>
  )
}

export default App
