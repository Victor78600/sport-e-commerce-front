// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import ProfilPage from "./pages/ProfilPage";
import HomePage from "./pages/homepage";
// import CreateActivity from "./pages/CreateActivityPage";
// import OneActivityPage from "./pages/OneActivityPage";
// import EditProfile from "./pages/EditProfile";
// import CreateComment from "./pages/CreateComment";
// import UpdateActivity from "./pages/UpdateActivity";
// Navigation
// import LoggedOutUser from "./navigation/LoggedOutUser";
// import LoggedInUser from "./navigation/LoggedInUser";

// import Layout from "./layouts/Layout";
// import UserLayout from "./layouts/UserLayout";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
