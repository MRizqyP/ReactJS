import React, { Component } from "react";
import axios from "axios";

export default class putbooksdareal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: "",
      author: "",
      published_date: "",
      pages: null,
      language: "",
      published_id: "",
      createdAt: "",
      updatedAt: ""
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    const result = await axios({
      method: "get",
      url: "http://localhost:8085/books/" + id,
      headers: {
        Authorization: token.token.accessToken
      }
    });

    this.setState(result.data.book);

    console.log(result);
  };

  handlerChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
    // console.log(this.state.title);
  };

  handlerSubmit = async e => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    e.preventDefault();
    await axios({
      method: "put",
      url: "http://localhost:8085/books/" + id,
      data: this.state,
      headers: {
        Authorization: token.token.accessToken
      }
    });
    this.props.history.push("/get");
  };

  render() {
    return (
      <div className="container mt-5 ">
        <form onSubmit={this.handlerSubmit}>
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
                value={this.state.title}
                onChange={this.handlerChange}
                //   ref={register({
                //     required: "Required"
                //   })}
              />

              {/* <span>{errors.name && errors.name.message}</span> */}
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input
                name="author"
                class="form-control"
                type="text"
                value={this.state.author}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>

            <div class="form-group">
              <label for="author">Pages</label>
              <input
                name="pages"
                class="form-control"
                type="number"
                value={this.state.pages}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>
            <div class="form-group">
              <label for="author">Language</label>
              <input
                name="language"
                class="form-control"
                type="text"
                value={this.state.language}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>
            <div class="form-group">
              <label for="author">Published Id</label>
              <input
                name="published_id"
                class="form-control"
                type="number"
                value={this.state.published_id}
                // ref={register({
                //   required: "Required"
                // })}
                onChange={this.handlerChange}
              />

              {/* <span>{errors.email && errors.email.message}</span> */}
            </div>
            <button type="submit" value="edit" class="btn btn-primary">
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
