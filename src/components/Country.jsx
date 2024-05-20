"use client";
import React, { useEffect, useState } from "react";

function Country() {
  const [country, setCountry] = useState("Sri Lanka");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch("http://ip-api.com/json")
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
}

export default Country;
