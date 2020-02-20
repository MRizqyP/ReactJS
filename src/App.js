import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Hook from "./component/getbook";
import Navbar from "./component/navbar";
import Nyob from "./component/nyob";

function App() {
  return (
    // <Container>
    //   <Greeting name="Rizqy" age="19" gender="male" />
    // </Container>axios.get('https://someurl)

    // DarealAxios
    // axios
    //   .get("https://hn.algolia.com/api/v1/search?query=redux")
    //   .then(function(response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function() {
    //     // always executed
    //   })
    // <Navbar />
    // <Nyob />
    <Hook />
  );
}

export default App;
