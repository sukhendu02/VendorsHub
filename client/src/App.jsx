import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar';
import DashboardStats from './Components/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar/>
          <main className="flex-1 overflow-x-hidden overflow-y-auto m-3 p-2">
            <Routes>
              <Route path="/" element={<DashboardStats/>} />
              <Route path="/orders" element={<div className="p-6">Orders Page</div>} />
              <Route path="/users" element={<div className="p-6">Users Page</div>} />
              <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  
    </>
  )
}

export default App
