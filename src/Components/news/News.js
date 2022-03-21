import React, { useState } from "react";
import * as ne from "./News.css";
// import img from "../../assets/logo192.png";
import { BsCalendar2Date } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";



export const News = () => {
  const [fullshow, setFullShow] = useState(false);
  const [halfShow, setHalfSHow] = useState(true);

  const readeMore = () => {
    setFullShow(true);
    setHalfSHow(false);
  };
  const readLess = () => {
    setFullShow(false);
    setHalfSHow(true);
  };

  const [news, setNews] = useState([]);

  const getNewsFromDB = () => {
    axios
      .get("http://localhost:4000/news/")
      .then((res) => {
        console.log(res.data.data);
        setNews(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  const [advertisement, setAdvertisement] = useState([]);

  const getAdvertisementFromDB = () => {
    axios
      .get("http://localhost:4000/advertisements/")
      .then((res) => {
        console.log(res.data.data);
        setAdvertisement(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getNewsFromDB();
  }, []);

  useEffect(() => {
    getAdvertisementFromDB();
  }, []);

  const display = [];
  let j = 0;

  for (let i = 0; i < news.length; i++) {
    display.push(news[i]);

    if (i % 3 == 0) {
      if (j == advertisement.length) j = 0;
      display.push(advertisement[j]);
      j++;
    }
  }

  return (
    <ne.root>
      <ne.post>
        {display.map((item, index) => (
          <ne.content>
            <ne.titleDateDiv>
              <div>
                <ne.title> {item ? item.title : " "} </ne.title>
                <h6 className="sponsorDIV">{item ? item.sponser : " "}</h6>
              </div>
              <ne.date>
                <BsCalendar2Date style={{ marginRight: "0.5rem" }} />
                {item ? item.date : " "}
              </ne.date>
            </ne.titleDateDiv>
            {fullshow ? (
              <ne.des>
                {item ? item.description : " "}
                <button onClick={readLess}>Read less</button>
              </ne.des>
            ) : halfShow ? (
              <ne.des>
                {item ? item.description.substr(0, 250) : " "}
                <z> .... </z>
                <button onClick={readeMore}>Read More</button>
              </ne.des>
            ) : (
              " "
            )}

            <img src={item ? item.image : " "} />
          </ne.content>
        ))}
      </ne.post>
    </ne.root>
  );
};
