import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
const Register = props => {
  const { register, watch, errors, getValues, formState } = useForm();

  const [form, usedForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    roles: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8085/register", {
        name: form.nama,
        username: form.username,
        email: form.email,
        password: form.password,
        roles: ["USER"]
      });
      if (result.status === 201) {
        alert("Data inserted sucessfuly!");
      } else {
        throw new Error("Failed to insert data!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateField = e => {
    usedForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <div class="form-group">
          <label for="nama">Nama</label>
          <input
            name="nama"
            class="form-control"
            value={form.nama}
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Tidak di perbolehkan menggunakan angka"
              }
            })}
            onChange={UpdateField}
          />
          <span>{errors.nama && errors.nama.message}</span>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            name="username"
            class="form-control"
            value={form.username}
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Tidak di perbolehkan menggunakan angka"
              }
            })}
            onChange={UpdateField}
          />
          <span>{errors.username && errors.username.message}</span>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            name="email"
            class="form-control"
            value={form.email}
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
            onChange={UpdateField}
          />

          <span>{errors.email && errors.email.message}</span>
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            class="form-control"
            ref={register({
              required: "Required",
              minLength: 6
            })}
            onChange={UpdateField}
          />
          <span>
            {errors.password && "Form Harus di isi dan lebih dari 6 huruf"}
          </span>
        </div>
        <div class="form-group mb-5">
          <label for="newPassword">Confirm Password</label>
          <input
            name="newPassword"
            type="password"
            class="form-control"
            ref={register({
              required: "Required",
              validate: value => value === getValues().password
            })}
            onChange={UpdateField}
          />
          <span>{errors.newPassword && "Password tidak sama"}</span>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          // disabled={!formState.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
