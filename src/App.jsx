import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/students" element={<div>Students Page</div>} />
        <Route path="/teachers" element={<div>Teachers Page</div>} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/mock-tests" element={<div>Mock Tests Page</div>} />
        <Route path="/reports" element={<div>Reports Page</div>} />
        
        {/* Settings Route olib tashlandi */}
      </Routes>
    </Router>
  );
}

export default App;