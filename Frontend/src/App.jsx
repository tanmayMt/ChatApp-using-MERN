import React from 'react';
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
// import Login from "./components/Login";

const App = () => {
  //const authUser=true;

  return (
    <>
      <div className="flex h-screen">
        <Left/>
        <Right/>
      </div>

    </>
  )
}

export default App;