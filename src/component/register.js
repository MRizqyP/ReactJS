import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
const Register = props => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    getValues,
    formState
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };
  console.log(watch("example"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt-5">
        <div class="form-group">
          <label for="nama">Nama</label>
          <input
            name="nama"
            class="form-control"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Tidak di perbolehkan menggunakan angka"
              }
            })}
          />
          <span>{errors.nama && errors.nama.message}</span>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            name="email"
            class="form-control"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />

          <span>{errors.email && errors.email.message}</span>
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            ref={register({
              required: "Required",
              minLength: 6
            })}
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
          />
          <span>{errors.newPassword && "Password tidak sama"}</span>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          disabled={!formState.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
