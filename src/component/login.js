import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import createPersistedState from "@plq/use-persisted-state";

export default function Login() {
  const [useQwe] = createPersistedState("token", window.sessionStorage);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [tokenss, getToken] = useQwe("token", "");

  const [role, setRole] = useState({
    redirect: true
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://localhost:8085/login", {
        username: form.username,
        password: form.password
      });
      getToken(result.data);
      setRole(result.data.Role);
      // const tokens = JSON.parse(
      //   sessionStorage.getItem("persisted_state_hook:token")
      // );

      // console.log(result.data.Role);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(result.data);

  const UpdateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  if (role === "ADMIN") {
    return <Redirect to={"/admin"} />;
  } else if (role === "USER") {
    return <Redirect to={"/"} />;
  }
  return (
    <div class="container mt-5">
      <p>
        <h2>Halaman Login</h2>
      </p>
      <form onSubmit={handleSubmit}>
        <div class="form-group mt-5">
          <label for="Email">Username</label>
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
