import React, { Component } from "react";
import axios from "axios";

export default class listorderadmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const token = JSON.parse(
      sessionStorage.getItem("persisted_state_hook:token")
    );
    const urls = "http://localhost:8085/orders/" + id;
    await axios({
      method: "get",
      url: urls,
      headers: {
        Authorization: token.token.accessToken
      }
    }).then(data => {
      console.log(urls);

      console.log(data.data.user.books);
      this.setState({
        users: data.data.user.books
      });
    });
    // this.setState(result.data.books);
  };

  render() {
    return (
      <div>
        {this.state.users.map((data, asd) => {
          return (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }
}
