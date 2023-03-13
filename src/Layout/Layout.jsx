import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer"
import Router from "../Router/Router";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Router />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
