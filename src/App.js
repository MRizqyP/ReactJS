import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Greeting from "./component/Greeting";
import Hook from "./component/axioshook";
import Navbar from "./component/navbar";

function App() {
  return (
    // <Container>
    //   <Greeting name="Rizqy" age="19" gender="male" />
    // </Container>axios.get('https://someurl)

    //DarealAxios
    // axios
    //   .get("http://localhost:3004/persons")
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
    <Navbar />
    // <Hook />
  );
}

export default App;
