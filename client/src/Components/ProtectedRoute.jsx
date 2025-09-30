// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";

// const ProtectedRoute = () => {
//   const { user,authLoading} = useAuth();
//   // if (authLoading) return <div className="h-screen flex items-center justify-center">Checking authentication...</div>; // ✅ Prevent flickering
//   // if (authLoading) return null; // ✅ Prevents flickering
  
//   if (authLoading) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-gray-100">
//         <div className="text-2xl font-bold">Loading...</div>
//       </div>
//     );
//   }
//   // return user ? <Outlet /> : <Navigate to="/signin" replace  />;
//   if (!user) {
//     return <Navigate to="/vendor/auth/signin" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const ProtectedRoute = () => {
  const { user, authLoading } = useAuth(); // ✅ Get user & auth loading state

  if (authLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/vendor/auth/signin" replace />; // ✅ Redirect if not logged in
  }

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto  sm:m-1  sm:p-2 mb-14 sm:mb-0">
          <Outlet /> {/* ✅ This makes sure child routes are rendered properly */}
        </main>
      </div>
    </div>
  );
};

export default ProtectedRoute;

