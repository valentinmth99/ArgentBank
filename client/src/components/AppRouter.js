import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home';
import SignIn from '../pages/SignIn';
import Header from './Header';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store';
import User from '../pages/User';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/user" element={<ProtectedRoute element={<User />} />} />
        </Routes>
    </Router>
    </PersistGate>
  )
}

export default AppRouter;