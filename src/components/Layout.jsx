import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

/** Layout for website which will be used on all the pages **/
function Layout() {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
