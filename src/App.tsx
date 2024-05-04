import React, { useState } from "react";
import data from "./data";

import "./App.css";
import JobCards from "./components/JobCards";
import { Box, Grid } from "@mui/material";
async function apiCall() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const data = await fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error(error));
}

function App() {
  // const [data, setdata] = useState();
  // apiCall().then((result) => console.log("result", result));
  // if (!data) {
  //   return <></>;
  // }
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Grid container spacing={2}>
          {data?.jdList.map((jobData: any) => (
            <Grid item xs={12} sm={6} md={4} key={jobData.jdUid}>
              <JobCards job={jobData} />
            </Grid>
          ))}
        </Grid>
      </body>
    </div>
  );
}

export default App;
