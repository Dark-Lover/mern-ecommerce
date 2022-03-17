import React from "react";
import Header from "./components/header/Header";
import HeaderContainer from "./containers/HeaderContainer";

const App = () => {
  return (
    <>
      <HeaderContainer children={<Header />} />;
    </>
  );
};

export default App;
