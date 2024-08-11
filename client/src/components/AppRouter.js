import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home';
import SignIn from '../pages/SignIn';
import Header from './Header';

const AppRouter = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    </Router>
  )
}

export default AppRouter;