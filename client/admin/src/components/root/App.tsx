import React from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Router from "../../routes/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
