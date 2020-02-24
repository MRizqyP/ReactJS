import React, { useState } from "react";
import Axios from "axios";
import { Route, Redirect } from "react-router-dom";
import createPersistedState from "@plq/use-persisted-state";

export default function Login() {
  const [useQwe] = createPersistedState("token", window.sessionStorage);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [toHome, setToHome] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://localhost:8085/login", {
        username: form.username,
        password: form.password
      });
      getToken(result.data);

      console.log(result);

      if (result.data.Role === "USER") {
        window.location.replace("/");
      } else if (result.data.Role === "ADMIN") {
        window.location.replace("/admin");
      } else if (result.data.Role === "PM") {
        window.location.replace("/pm");
      } else {
        alert("Salah Username Atau Password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [token, getToken] = useQwe("token", "");

  // const fetchData = async = async () => {
  //   try{
  //     const resultt = await Axios.get("")
  //   }
  // }

  const UpdateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="Email">username</label>
          <input
            name="username"
            type="text"
            class="form-control"
            value={form.username}
            onChange={UpdateField}
          />
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            name="password"
            type="text"
            class="form-control"
            value={form.password}
            onChange={UpdateField}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
