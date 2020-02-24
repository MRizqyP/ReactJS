import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
const Register = props => {
  const defaultValues = {
    title: "",
    author: "",
    date: "",
    pages: "",
    language: "",
    publishedid: ""
  };
  const { register, errors, formState, reset } = useForm({
    defaultValues
  });

  const [form, setValues] = useState({
    title: "",
    author: "",
    published_date: "",
    pages: "",
    language: "",
    published_id: ""
  });

  const printValues = e => {
    e.preventDefault();
    console.log(
      form.title,
      form.author,
      form.date,
      form.pages,
      form.language,
      form.publishedid
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3003/books", {
        title: form.title,
        author: form.author,
        published_date: form.date,
        pages: form.pages,
        language: form.language,
        published_id: form.publishedid
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

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <center>
          <p>
            <h2>Form Input Buku</h2>
          </p>
        </center>
        <div class="form-group">
          <label for="nama">Title/Judul Buku</label>
          <input
            name="title"
            type="text"
            class="form-control"
            value={form.title}
            ref={register({
              required: "Required"
            })}
            onChange={updateField}
          />

          {/* <span>{errors.name && errors.name.message}</span> */}
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input
            name="author"
            class="form-control"
            type="text"
            value={form.author}
            ref={register({
              required: "Required"
            })}
            onChange={updateField}
          />

          {/* <span>{errors.email && errors.email.message}</span> */}
        </div>
        <div class="form-group">
          <label for="date">Published Date</label>
          <input
            name="date"
            type="date"
            value={form.date}
            class="form-control"
            ref={register({
              required: "Required"
            })}
            onChange={updateField}
          />
          <span>{errors.password && errors.email.password}</span>
        </div>
        <div class="form-group">
          <label for="Pages">Pages</label>
          <input
            name="pages"
            type="number"
            value={form.pages}
            class="form-control"
            ref={register({
              required: "Required"
            })}
            onChange={updateField}
          />
          {/* <span>{errors.newPassword && "Password tidak sama"}</span> */}
        </div>
        <div class="form-group">
          <label for="language">Language</label>
          <input
            name="language"
            type="text"
            value={form.language}
            class="form-control"
            ref={register({
              required: "Required"
            })}
            onChange={updateField}
          />
          {/* <span>{errors.password && errors.email.password}</span> */}
        </div>
        <div class="form-group">
          <label for="published">Published - id</label>
          <input
            name="publishedid"
            value={form.publishedid}
            type="number"
            class="form-control"
            ref={register({
              required: "Required"
            })}
            onChange={updateField}
          />
          {/* <span>{errors.password && errors.email.password}</span> */}
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            reset(defaultValues);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
