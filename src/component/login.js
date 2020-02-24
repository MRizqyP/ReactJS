import React, { useState } from "react";
import Axios from "axios";
import { Route, Redirect } from "react-router-dom";
import createPersistedState from "@plq/use-persisted-state";

export default function Login() {
  const [usePersistedState] = createPersistedState(
    "token",
    window.sessionStorage
  );
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [data, setData] = useState({
    token: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://localhost:8085/login", {
        username: form.username,
        password: form.password
      });
      setData(result.data.accessToken);

      console.log(result.data.accessToken);

      if (result.status === 200) {
        alert("Berhasil Login");
      } else {
        throw new Error("Failed to !");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);

  const [token, getToken] = usePersistedState(data, "");

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
