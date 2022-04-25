import React, { useState } from "react";
import * as sh from "./Shop.css";
import { IoSearchCircle } from "react-icons/io5";
import styled, { css } from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 15rem;
  // height: 15rem;
  background-color: white;
  border-style: solid;
  border-width: 0.1px;
  border-color: #cccccc;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ,
  .img {
    max-width: 15rem;
    // height: 100%;
  }
  ,
  .name {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }

  .price {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #d65c5c;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const Shop = (props) => {
  const [shopProduct, setShopProduct] = useState([]);

  const getShopProductFroMDB = () => {
    axios
      .get("http://localhost:4000/shopping/")
      .then((res) => {
        console.log(res.data.data);
        setShopProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getShopProductFroMDB();
  }, []);
  const [filterValue, setFilterValue] = useState("");
  const filter = (value) => {
    setFilterValue(value);
  };

  function search(rows) {
    return rows
      .filter(
        (shopProduct) =>
          shopProduct.title
            .toString()
            .toLowerCase()
            .indexOf(props.navSearchBar.toLowerCase()) > -1 ||
          shopProduct.category
            .toString()
            .toLowerCase()
            .indexOf(props.navSearchBar.toLowerCase()) > -1
      )
      .filter((shopProduct) => shopProduct.price > minValue)
      .filter((shopProduct) => shopProduct.price < maxValue);
  }

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] =
    useState(9999999999999999999999999999999999999999999999);
  // console.log(minValue);

  const MaxMin = () => {
    let numberInputMin = document.getElementById("numberInputMinShop").value;
    let numberInputMax = document.getElementById("numberInputMaxShop").value;

    // setMinValue(numberInputMin);
    if (numberInputMax > numberInputMin) {
      setMinValue(0);
    } else {
      setMinValue(numberInputMin);
    }

    if (numberInputMax == 0) {
      setMaxValue(999999999999999999999999999999999999999999999999999);
    } else {
      setMaxValue(numberInputMax);
    }
  };

  const [order, setOrder] = useState("");
  const sortingBM = (col) => {
    if (order === "DEC" || order === "ASC") {
      getShopProductFroMDB();
      setOrder("");
    }
  };
  const sortingLTH = (col) => {
    if (order === "DEC" || order === "") {
      const sorted = [...shopProduct].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setShopProduct(sorted);
      setOrder("ASC");
    }
  };
  const sortingHTL = (col) => {
    if (order === "ASC" || order === "") {
      const sorted = [...shopProduct].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setShopProduct(sorted);
      setOrder("DEC");
    }
  };

  return (
    <sh.root>
      <sh.div>
        <sh.categories>
          <sh.CategoryHeading>categories</sh.CategoryHeading>

          <sh.categoriesSection>
            <p
              onClick={() => {
                filter("");
              }}
            >
              All Product
            </p>
            <p
              onClick={() => {
                filter("Drum");
              }}
            >
              Drum
            </p>
            <p
              onClick={() => {
                filter("Guitar");
              }}
            >
              Guitar
            </p>
            <p
              onClick={() => {
                filter("Bass");
              }}
            >
              Bass
            </p>
            <p
              onClick={() => {
                filter("Keyboard");
              }}
            >
              Keyboard
            </p>
            <p
              onClick={() => {
                filter("Microphone");
              }}
            >
              Microphone
            </p>
            <p
              onClick={() => {
                filter("Accessories");
              }}
            >
              Accessories
            </p>
          </sh.categoriesSection>

          <sh.filterHeading>Filter</sh.filterHeading>

          <sh.filterSection>
            <p>Price</p>

            <sh.input>
              <input
                type="number"
                min="0"
                id="numberInputMinShop"
                style={{ width: "3rem" }}
              />
              -
              <input
                type="number"
                min="0"
                id="numberInputMaxShop"
                style={{ width: "3rem" }}
              />
              <IoSearchCircle className="iconSearch" onClick={MaxMin} />
            </sh.input>

            <sh.sortBy>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">sort by</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem
                    value="best match"
                    onClick={() => sortingBM("price")}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Best Match
                  </MenuItem>
                  <MenuItem
                    value="low price to higher price"
                    onClick={() => sortingLTH("price")}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Low to Higher Price{" "}
                  </MenuItem>
                  <MenuItem
                    value="higher price to lower price"
                    onClick={() => sortingHTL("price")}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    Higher to Lower Price
                  </MenuItem>
                </Select>
              </FormControl>
            </sh.sortBy>
          </sh.filterSection>
        </sh.categories>
        <div className="flexDiv">
          <sh.searchOutput>
            {filterValue === "" ? (
              <h3>Shop Now </h3>
            ) : (
              <h3>Shop {filterValue} </h3>
            )}
            {props.navSearchBar === "" ? null : (
              <h3 style={{ color: "#666666", fontStyle: "italic" }}>
                search: "{props.navSearchBar}"
              </h3>
            )}
          </sh.searchOutput>
          <sh.productSection>
            <div className="App">
              <Grid>
                {search(shopProduct)
                  .filter((shopProduct) =>
                    shopProduct.category.includes(filterValue)
                  )
                  .map((item, index) => (
                    <Link
                      to={"/ShopProductDetail/" + item.sp_id}
                      style={{ textDecoration: "none" }}
                    >
                      <Item>
                        <img className="img" src={item.image} />

                        <name className="name">
                          {item.title.substr(0, 20)}...
                        </name>
                        <price className="price">Rs.{item.price}</price>
                      </Item>
                    </Link>
                  ))}
              </Grid>
            </div>
          </sh.productSection>
        </div>
      </sh.div>
    </sh.root>
  );
};
