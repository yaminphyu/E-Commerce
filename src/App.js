import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import userRoutes from './routes/AllRoute';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className='app'>
          <Routes>
            {
              userRoutes.map((route, key) => (
                <Route
                  path={route.path}
                  element={<route.component />}
                />
              ))
            }
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
