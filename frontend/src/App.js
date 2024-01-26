import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import  LoginPage from "./authPages/LoginPage/LoginPage";
import  RegisterPage  from "./authPages/RegisterPage/RegisterPage";
import { Dashboard } from "./Dashboard/Dashboard";

function App() {
  const routes = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/", element: <Navigate to="/dashboard" /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
