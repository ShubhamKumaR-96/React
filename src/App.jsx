import React from "react";
import BgChanger from "./components/BgChanger";
import PasswordGenerator from "./components/PasswordGenerator";

const App = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <PasswordGenerator />
    </div>
  );
};

export default App;
