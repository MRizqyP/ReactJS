import React, { Component, useState } from "react";
import Axios from "axios";
import { Route, Redirect } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://localhost:8085/login", {
        username: form.username,
        password: form.password
      });
      console.log(result);

      if (result.status === 200) {
        this.props.history.push("/get");
      } else {
        throw new Error("Failed to !");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
}

export default class loginpage extends Component {
  render() {
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
}
