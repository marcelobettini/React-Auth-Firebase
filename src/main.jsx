import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Protected from "./components/Protected.jsx";
import AuthGuard from "./components/AuthGuard.jsx";
import { UserCtxProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserCtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="register" element={<Register />} />
            <Route element={<AuthGuard />}>
              <Route path="protected" element={<Protected />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserCtxProvider>
  </React.StrictMode>
);
