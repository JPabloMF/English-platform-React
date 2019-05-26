import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { SIDENAV_DATA } from "../../constants.js";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const SideNav = (props) => {
  const { openSidenav, setOpenSidenav } = props;
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenSidenav(open);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {SIDENAV_DATA.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.IconComponent}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Drawer open={openSidenav} onClose={toggleDrawer(false)}>
        {sideList("left")}
      </Drawer>
    </>
  );
};

SideNav.propTypes = {
  openSidenav: PropTypes.bool.isRequired,
  setOpenSidenav: PropTypes.func.isRequired
};

export default SideNav;
