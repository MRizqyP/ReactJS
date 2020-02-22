import React, { Fragment, useState, useEffect, useMemo } from "react";
import axios from "axios";
function Byid() {
  const [data, setData] = useState({ data: [] });
  const [query, setQuery] = useState();
  const [url, setUrl] = useState("http://localhost:3003/books");

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
    // console.log(data);
  }, [url]);
  console.log(url);

  state = {
    title: "",
    author: "",
    published_date: "",
    pages: "",
    language: "",
    published_id: ""
  };

  return (
    <div className="container mt-5 ">
      <form>
        <center>
          <p>
            <h2>Form Perubahan Buku</h2>
          </p>
        </center>

        <div className="container mt-5">
          <div class="form-group">
            <label for="nama">Title/Judul Buku</label>
            <input
              name="title"
              type="text"
              class="form-control"
              //   ref={register({
              //     required: "Required"
              //   })}
            />

            {/* <span>{errors.name && errors.name.message}</span> */}
          </div>
          <button type="submit" class="btn btn-primary">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Byid;
