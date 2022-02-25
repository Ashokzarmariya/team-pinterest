import React from "react";
import HomeCard from "./HomeCard";
import { BsPlusLg } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const api_key="563492ad6f91700001000001e9fb2073b9d94fb88ac11114a060be83"

  const getData = async() => {
    const res = await fetch("https://api.pexels.com/v1/curated?page=2&per_page=60", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:api_key,
      }
    })
    const imgData = await res.json()
    setData(imgData.photos)
    console.log("api",imgData.photos)
  };
  useEffect(() => {
    getData()
  },[])
  return (
    <div className="flex flex-wrap justify-center  mt-10">
      
      {data.map((item) => {
        return <HomeCard key={item.id} imgUrl={item.src.medium}/>;
      })}
      <div className="fixed bottom-16 right-10 bg-white z-20 p-3 rounded-full">
        <BsPlusLg />
      </div>
      <div className="fixed bottom-3 right-10 bg-white z-20 p-3 rounded-full">
        <BsQuestionLg />
      </div>
    </div>
  );
};

export default Home;
