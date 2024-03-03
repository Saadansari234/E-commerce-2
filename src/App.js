import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import SignIn from "./components/Login";


function App() {
  const loginData = useSelector((state) => state.LOGIN_INFO)
  return (
    loginData ? (<Layout/>) : (<SignIn />)
  );
}

export default App;
