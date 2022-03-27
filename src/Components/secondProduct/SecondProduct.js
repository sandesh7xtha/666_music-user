import React, { useState } from "react";
import * as sp from "./SecondProduct.css";
import styled, { css } from "styled-components";
import { IoSearchCircle } from "react-icons/io5";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReportPopUp from "./reportPopUp";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";



export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.5rem 0.5rem 0.5rem;
  // width: 35rem;
  // height: 55rem;
  background-color: white;

  border-radius: 5px;

  img {
    max-width: 15rem;
    height: 100%;
  }
  name {
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

  price {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    // color: #AA1111;
    color: #d65c5c;
    // color: #A51010;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
`;

export const Itemsub = styled.div`
  // width: 55rem;
  // height: 20rem;
  background-color: white;
  border-style: solid;
  border-width: 0.1px;
  border-color: #cccccc;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .PopDiv {
    display: flex;
    justify-content: flex-end;
    margin-right: 0.3rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const SecondProduct = (props) => {
  const [secondProduct, setSecondProduct] = useState([]);
  const getSecondProductFroMDB = () => {
    axios
      .get("http://localhost:4000/secondProduct/")
      .then((res) => {
        console.log(res.data.data);
        setSecondProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getSecondProductFroMDB();



  }, []);

  const [filterValue, setFilterValue] = useState("");
  const filter = (value) => {
    setFilterValue(value);
  };

  function search(rows) {
    return rows
      .filter(
        (secondProduct) =>
          secondProduct.title
            .toString()
            .toLowerCase()
            .indexOf(props.navSearchBar.toLowerCase()) > -1 ||
          secondProduct.category
            .toString()
            .toLowerCase()
            .indexOf(props.navSearchBar.toLowerCase()) > -1
      )
      .filter((secondProduct) => secondProduct.price < maxValue)
      .filter((secondProduct) => secondProduct.price > minValue);
  }

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] =
    useState(9999999999999999999999999999999999999999999999);


  



  const MaxMin = () => {
    let numberInputMax = document.getElementById("numberInputMax").value;
    let numberInputMin = document.getElementById("numberInputMin").value;

    if (numberInputMax == 0) {
      setMaxValue(999999999999999999999999999999999999999999999999999);
    } else {
      setMaxValue(numberInputMax);
    }


    setMinValue(numberInputMin);
    if (numberInputMax < numberInputMin) {
      setMinValue(0);
    }


  };

  const [order, setOrder] = useState("");
  const sortingBM = (col) => {
    if (order === "DEC" || order === "ASC") {
      getSecondProductFroMDB();
      setOrder("");
    }
  };
  const sortingLTH = (col) => {
    if (order === "DEC" || order === "") {
      const sorted = [...secondProduct].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setSecondProduct(sorted);
      setOrder("ASC");
    }
  };
  const sortingHTL = (col) => {
    if (order === "ASC" || order === "") {
      const sorted = [...secondProduct].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setSecondProduct(sorted);
      setOrder("DEC");
    }
  };

  return (
    <sp.root>
      <sp.div>
        <sp.categories>
          <sp.CategoryHeading>categories</sp.CategoryHeading>

          <sp.categoriesSection>
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
          </sp.categoriesSection>

          <sp.filterHeading>Filter</sp.filterHeading>

          <sp.filterSection>
            <p>Price</p>

            <sp.input>
              <input
                type="number"
                min="0"
                id="numberInputMin"
                style={{ width: "3rem" }}

              />
              -
              <input
                type="number"
                min="0"
                id="numberInputMax"
                style={{ width: "3rem" }}

              />
              <IoSearchCircle className="iconSearch" onClick={MaxMin} />
            </sp.input>

            <sp.sortBy>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">sort by</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <MenuItem
                      value="best match"
                      onClick={() => sortingBM("price")}
                    >
                      Best Match
                    </MenuItem>
                    <MenuItem
                      value="low price to higher price"
                      onClick={() => sortingLTH("price")}
                    >
                      Low to Higher Price{" "}
                    </MenuItem>
                    <MenuItem
                      value="higher price to lower price"
                      onClick={() => sortingHTL("price")}
                    >
                      Higher to Lower Price
                    </MenuItem>
                  </div>
                </Select>
              </FormControl>
            </sp.sortBy>
          </sp.filterSection>
        </sp.categories>
        <div className="flexDiv">
          <sp.searchOutput>
            {props.navSearchBar === "" ? null : (
              <h3 style={{ color: "#666666", fontStyle: "italic" }}>
                search: "{props.navSearchBar}"
              </h3>
            )}
          </sp.searchOutput>
          <sp.productSection>
            <sp.upload>
              <Grid>
                {search(secondProduct)
                  .filter((secondProduct) =>
                    secondProduct.category.includes(filterValue)
                  )
                  .map((item, index) => (
                    <Itemsub>
                      <div className="PopDiv">
                        <ReportPopUp
                          productId={item.shp_id}
                          style={{ display: "flex", justifyContent: "center" }}
                        />
                      </div>
                      <Link
                        to={"/secondhandDetail/" + item.shp_id}
                        style={{ textDecoration: "none" }}
                      >
                        <Item>
                          <img src={item.image} />
                          <name>{item.title}</name>
                          <price>Rs.{item.price}</price>
                        </Item>
                      </Link>
                    </Itemsub>
                  ))}
              </Grid>
            </sp.upload>
          </sp.productSection>
        </div>
      </sp.div>
    </sp.root>
  );
};
