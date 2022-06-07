import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import App from "./App";
import Register from "./components/Authentication/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Users from "./components/User/Users";
import Institutes from "./components/Institute/Institutes";
import Departments from "./components/Department/Departments";
import Students from "./components/Student/Students";
import { Provider } from "react-redux";
import store from "./store";
import AddInstitute from "./components/Institute/AddInstitute";
import EditInstitute from "./components/Institute/EditInstitute";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/institutes" element={<Institutes />} />
        <Route path="/institutes/addInstitute" element={<AddInstitute />} />
        <Route path="/institutes/:id" element={<EditInstitute />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
