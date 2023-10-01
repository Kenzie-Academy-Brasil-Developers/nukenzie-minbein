import { useState } from "react";
import Header from "./components/header";
import Form from "./components/formFinance";
import "./globalstyles.scss";
import "./reset.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Form />
      </main>
    </>
  );
};

export default App;
