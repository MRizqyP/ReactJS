import React, { useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function FetchUsingHook() {
  const token = JSON.parse(
    sessionStorage.getItem("persisted_state_hook:token")
  );
  const [data, setData] = useState([]);
  const [role, setRole] = useState([]);
  useMemo(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: "http://localhost:8085/api/users",
        headers: {
          Authorization: token.token.accessToken
        }
      });
      setData(result.data.user);
      setRole(result.data.user.roles);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }

    // console.log(data);
  }, []);

  //   function deleteConfirm(title, id) {
  //     confirmAlert({
  //       title: "Peringatan",
  //       message: "Apakah anda yakin ingin menghapus buku " + title + "?",
  //       buttons: [
  //         {
  //           label: "Delete",
  //           onClick: () => deleteProduk(id)
  //         },
  //         {
  //           label: "Tidak",
  //           onClick: () => {}
  //         }
  //       ]
  //     });
  //   }

  async function pinjam(no) {
    await axios({
      method: "get",
      url: `http://localhost:8085/orders/${no}`,
      headers: {
        Authorization: token.token.accessToken
      }
    });
    window.location.reload("/listorder");
  }
  let no = 1;
  const render = () => {
    return data.map((data, id) => {
      return (
        <tr key={id}>
          <td>{no++}</td>
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          {/* <td>{data.roles[0]}</td> */}
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
              //   onClick={() => deleteConfirm(data.title, data.id)}
            >
              HAPUS
            </i>
          </td>
          <td>
            <Link to={"/listorderadmin/" + data.id}>
              <button
                type="button"
                class="btn btn-warning"
                //   onClick={() => pinjam(no)}
              >
                <i class="fa fa-eye">
                  <a href=""></a>
                </i>
              </button>
            </Link>
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
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Edit User</td>
            <td>Hapus User</td>
            <td>Liat Peminjaman</td>
          </tr>
        </thead>
        <tbody>{render()}</tbody>
      </table>
    </div>
  );
}
export default FetchUsingHook;
