import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WEATHERAPP_KEY } from "../../assets/assets";
const cityName = "Mumbai";

export const fetchCity = createAsyncThunk("city/fetchCity", async () => {
  const res = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${WEATHERAPP_KEY}`
  );
  console.log(res.data);

  return res.data;
});

const CityView = () => {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(dispatch(fetchCity()), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const lat = city.data.map((city) => city.lat);
  console.log(lat);

  return (
    <div>
      {city.loading && <div>Loading...</div>}
      {!city.loading && city.error ? <div>Error : {city.error}</div> : null}
      {!city.loading && city.data.length > 0 ? <div>hello</div> : null}
    </div>
  );
};

export default CityView;
