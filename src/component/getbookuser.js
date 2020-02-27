import React, { useState, useMemo } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function FetchUsingHook() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );
  const [status, setStatus] = useState();
  const [data, setData] = useState({ book: [] });
  useMemo(() => {
    if (!token) {
      window.location.replace("/login");
    }
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: "http://localhost:8085/books",
        headers: {
          Authorization: token.token.accessToken
        }
      });
      setData(result.data);
      setStatus(result.status);
    };
    try {
      fetchData();
    } catch (err) {
      setStatus(err.response.status);
    }

    // console.log(data);
  }, []);

  async function pinjam(id) {
    await axios({
      method: "post",
      url: "http://localhost:8085/orders",
      headers: {
        Authorization: token.token.accessToken
      },
      data: {
        userId: token.token.id,
        bookId: id
      }
    });
    alert("Anda berhasil meminjam cek di list order");
  }

  const render = () => {
    return data.book.map((data, id) => {
      return (
        <tr key={id}>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.author}</td>
          <td>{data.published_date}</td>
          <td>{data.pages}</td>
          <td>{data.language}</td>
          <td>{data.published_id}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => pinjam(data.id)}
            >
              <i class="fa fa-eye"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

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
            <td>view</td>
          </tr>
        </thead>
        <tbody>{render()}</tbody>
      </table>
    </div>
  );
}
export default FetchUsingHook;
