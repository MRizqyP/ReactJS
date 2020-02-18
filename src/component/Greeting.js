import React from "react";

export default function Greeting(props) {
  return (
    <div>
      <h3>
        <p>
          Nama : {props.name}
          <br></br>
          Umur : {props.age}
          <br></br>
          Jenis Kelamin : {props.gender}
        </p>
      </h3>
    </div>
  );
}
