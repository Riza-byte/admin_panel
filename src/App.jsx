import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout'; 
import Dashboard from './components/dashboard/dashboard'; 
import Students from './components/students/students'; 
import Teachers from './components/teachers/teachers'; 
import Courses from './components/courses/courses';

function App() {
  return (
    <Router>
      <Routes>
        {/* Asosiy sahifani Dashboardga yo'naltirish */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Sidebar va Header barcha sahifalarda ko'rinishi uchun Layout ichida */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          
          {/* Teachers sahifasi ulandi */}
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses" element={<div>Courses Page</div>} />
          <Route path="/mock-tests" element={<div>Mock Tests Page</div>} />
          <Route path="/reports" element={<div>Reports Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;