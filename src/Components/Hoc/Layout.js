import React from "react";
import Aux from "./Aux";
import NavigationBar from "../Navigation/NavigationBar";
const Layout = (props) => {
  return (
    <Aux>
      <NavigationBar />
      <> {props.children} </>
    </Aux>
  );
};

export default Layout;
