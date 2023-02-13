import "./App.css";
import { Toaster } from "react-hot-toast";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-full ">
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
        <Header />
        <Main className="flex-grow " />
        <Footer />
      </div>
    </>
  );
};

export default App;
