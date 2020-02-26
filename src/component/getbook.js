import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function FetchUsingHook() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );
  const [data, setData] = useState({ book: [] });
  const [redirects, setRedirect] = useState({
    redirect: false
  });
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: "http://localhost:8085/books",
        headers: {
          Authorization: token.token.accessToken
        }
      });
      setData(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }

    // console.log(data);
  }, []);

  function deleteConfirm(title, id) {
    confirmAlert({
      title: "Peringatan",
      message: "Apakah anda yakin ingin menghapus buku " + title + "?",
      buttons: [
        {
          label: "Delete",
          onClick: () => deleteProduk(id)
        },
        {
          label: "Tidak",
          onClick: () => {}
        }
      ]
    });
  }

  function deleteProduk(id) {
    axios({
      method: "delete",
      url: `http://localhost:8085/books/${id}`,
      headers: {
        Authorization: token.token.accessToken
      }
    });
    window.location.reload(false);
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
            <Link to={"/put/" + data.id}>
              <i className="fa fa-pencil-square-o" aria-hidden="true">
                EDIT
              </i>
            </Link>
          </td>
          <td>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => deleteProduk(data.id)}
            >
              HAPUS
            </i>
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
            <td>Edit Buku</td>
            <td>Hapus Buku</td>
          </tr>
        </thead>
        <tbody>{render()}</tbody>
      </table>
    </div>
  );
}
export default FetchUsingHook;
