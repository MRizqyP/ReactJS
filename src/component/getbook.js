import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
function FetchUsingHook() {
  const [data, setData] = useState({ data: [] });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3003/books");
      setData(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
    // console.log(data);
  }, []);
  console.log(data);
  return (
    <div className="container mt-5 ">
      <table class="table table-striped">
        <thead>
          <tr>
            <td>No</td>
            <td>Title</td>
            <td>Author</td>
            <td>Tanggal Publish</td>
            <td>Jumlah Halaman</td>
            <td>Bahasa</td>
            <td>Id Publish</td>
          </tr>
        </thead>
        <tbody>
          {data.data.map((data, id) => (
            <tr key={id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.published_date}</td>
              <td>{data.pages}</td>
              <td>{data.language}</td>
              <td>{data.published_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FetchUsingHook;
