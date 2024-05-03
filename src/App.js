import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import SignIn from "./components/Login";
import SignUp from "./components/Signup"


function App() {
  const loginData = useSelector((state) => state.LOGIN_INFO)
  const signupData = useSelector((state) => state.ACTIVATE_INFO)
  return (
    loginData ? (<Layout/>) : (
      signupData==true ? <SignIn /> : <SignUp/>
    )
  );
  // return(
  //   <Layout/>
  // )
}

export default App;
