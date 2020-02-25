import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import createPersistedState from "@plq/use-persisted-state";
import { useForm } from "react-hook-form";

export default function Login() {
  const defaultValues = {
    username: "",
    password: ""
  };
  const { register, errors, reset } = useForm({
    defaultValues
  });

  const [useQwe] = createPersistedState("token", window.sessionStorage);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [tokenss, getToken] = useQwe("token", "");

  const [role, setRole] = useState({
    redirect: true
  });

  const [status, setStatus] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://localhost:8085/login", {
        username: form.username,
        password: form.password
      });
      getToken(result.data);
      setRole(result.data.Role);
      setStatus(result.status);
      if (result.status === 200) {
        alert("Berhasil Login");
      }
      // const tokens = JSON.parse(
      //   sessionStorage.getItem("persisted_state_hook:token")
      // );
    } catch (err) {
      setStatus(err.response.status);
      if (err.response.status === 404) {
        alert("Username Tidak Ada");
      } else if (err.response.status === 401) {
        alert("Password salah");
      }
    }
    // console.log(result.data.Role);
  };
  // console.log(status);

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
            ref={register({
              required: "Required"
            })}
            onChange={UpdateField}
          />
        </div>
        {/* <span>{errors.username && errors.username.message}</span> */}
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            value={form.password}
            ref={register({
              required: "Required"
            })}
            onChange={UpdateField}
          />
        </div>
        {/* <span>{errors.password && errors.password.message}</span> */}

        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            reset(defaultValues);
          }}
        >
          MASUK
        </button>
      </form>
    </div>
  );
}
