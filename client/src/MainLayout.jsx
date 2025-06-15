import React from 'react'

export default function MainLayout() {
  return (
    <>
          <div className="flex w-full h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto m-1 p-2">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  )
}
