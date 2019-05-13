import React, { useState } from "react";

/* components */
import Header from "../components/header";
import Sidenav from "../components/sidenav";

const Platform = (props) => {
  const [openSidenav, setOpenSidenav] = useState(false);

  return (
    <>
      <Header openSidenav={openSidenav} setOpenSidenav={setOpenSidenav} />
      <Sidenav openSidenav={openSidenav} setOpenSidenav={setOpenSidenav} />
    </>
  );
};

export default Platform;
