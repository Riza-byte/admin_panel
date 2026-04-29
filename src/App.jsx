import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material'; // <-- Mana bu qo'shildi
import Layout from './components/layout/Layout'; 
import Home from './components/home/home'; 
import Dashboard from './components/dashboard/dashboard'; 
import Students from './components/students/students'; 
import Teachers from './components/teachers/teachers'; 
import Courses from './components/courses/courses';
import Reports from './components/reports/reports';
import MockTests from './components/mock-test/mock-test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mock-tests" element={<MockTests />} />
          <Route path="/reports" element={<Reports />} />
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;