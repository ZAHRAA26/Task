import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainNavigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
