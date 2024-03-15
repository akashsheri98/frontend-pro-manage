import "./App.css";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
//import Settings from "./pages/Settings/Settings";
import Layout from "./pages/Layout/Layout";
import AppBoard from "./pages/AppBoard/AppBoard";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/register' element={<RegisterPage />} />,
      <Route path='/' element={<LoginPage />} />,
      <Route path='/login' element={<LoginPage />} />,
      <Route path='/' element={<Layout />}>
        <Route path='/appboard' element={<AppBoard />} />,
        <Route path='/analytics' element={<AnalyticsPage />} />,
        <Route path='/settings' element={<SettingsPage />} />,
      </Route>
    ])
  )
  return (

    
    <>
      {/*<BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            {<Route path="/analytics" element={<AnalyticsPage />} /> }
          </Routes>
        </BrowserRouter>*/}
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
