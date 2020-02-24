import React, { useState } from "react";
import Axios from "axios";

export default function Login() {
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
      if (result.status === 200) {
        alert("Data inserted sucessfuly!");
      } else {
        throw new Error("Failed to insert data!");
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
