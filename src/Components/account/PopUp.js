import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    marginTop: "-0.45rem",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
  },
  manuItem: {
    borderBottom: "1px solid #858796",
  },
  Title: {
    color: "#3458eb",
    fontSize: "12px",
    marginLeft: "1rem",
    textDecoration: "underline",
  },
}));

export default function PopUp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        {localStorage.getItem("token") ? (
          <Link style={{ textDecoration: "none" }} to="/addSell">
            <Button
              style={{
                color: "white",
                // backgroundColor:"#d65c5c",
                backgroundColor: "#121212",

                borderStyle: "solid",
                borderRadius: "0.4rem",
                margin: "1.5rem 0rem 1rem 0rem",
              }}
            >
              {" "}
              {localStorage.getItem("name")}
            </Button>
          </Link>
        ) : (
          <Button
            style={{ paddingTop: "1rem" }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            onClick={handleToggle}
          >
            <div className={classes.topThirdIcon}>
              <IconButton style={{ fontSize: "1rem", color: "white" }}>
                account
                <KeyboardArrowDownIcon />
              </IconButton>
            </div>
          </Button>
        )}

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <Link style={{ textDecoration: "none" }} to="/signIn">
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#121212",
                      borderStyle: "solid",
                      borderRadius: "0.4rem",
                      margin: "1.5rem 5rem 1rem 5rem",
                    }}
                  >
                    Sign In
                  </Button>
                </Link>

                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={classes.menu}
                  >
                    New here?
                    <Link
                      style={{ textDecoration: "none" }}
                      to="./createNewAcount"
                    >
                      <div
                        className={classes.Title}
                        style={{
                          color: "#121212",
                        }}
                      >
                        {" "}
                        Create Your account
                      </div>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
