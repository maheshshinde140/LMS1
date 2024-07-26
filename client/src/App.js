import React from 'react';
import NewRoute from './Routes/NewRoute';
import AdminRoute from './Routes/AdminRoute';
import StudentRoute from './Routes/StudentRoutes';
import TeacherRoutes from './Routes/TeacherRoutes';

import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  return (
    <div>
     
      <NewRoute/>
      <StudentRoute/>
      <TeacherRoutes/>
      <AdminRoute/>
      <Routes>
        <Route path='*' element={<Home/>} />
      </Routes>

    </div>
  )
}

export default App
