import React, { useState } from "react";
import * as n from "./Navbar.css";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import logo from "../../assets/666logo.png";
import bandLogo from "../../assets/cover band.png";

// import SearchBar from "material-ui-search-bar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import { Link } from "react-router-dom";
import PopUp from "../account/PopUp";
import { NavLink } from "react-router-dom";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    //   vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Navbar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <n.Main>
      <n.Root>
        <div>
          <img className="mainLogo" src={logo} />
          <img className="bandLogo" src={bandLogo} />
        </div>
        <n.NavMenu>
          <n.Search>
            <StyledInputBase
              className="searchBar"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  props.search(searchValue);
                }
              }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </n.Search>
          <SearchIcon
            onClick={() => props.search(searchValue)}
            style={{ borderRadius: "13px" }}
          />

          {/* <IoNotificationsSharp className="iconNotify" /> */}
          <Link to="/cart">
            {" "}
            <MdShoppingCart className="iconCart" />{" "}
          </Link>

          <p>
            <PopUp />
          </p>
        </n.NavMenu>
      </n.Root>

      <n.SubNavbar>
        <n.SubnavMenuItem>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            style={{ textDecoration: "none" }}
            to="/news"
          >
            <p>News</p>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            style={{ textDecoration: "none" }}
            to="/shop"
          >
            <p>Shop</p>
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            style={{ textDecoration: "none" }}
            to="/SecondProduct"
          >
            <p>Secondhand Product</p>
          </NavLink>
        </n.SubnavMenuItem>
      </n.SubNavbar>
    </n.Main>
  );
};
