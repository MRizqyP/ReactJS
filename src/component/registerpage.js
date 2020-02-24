import React from "react";

export default function registerpage() {
  return (
    <div class="container mt-5">
      <form>
        <div class="form-group">
          <label for="Email">Name</label>
          <input
            name="username"
            type="text"
            class="form-control"
            // value={form.username}
            // onChange={UpdateField}
          />
        </div>

        <div class="form-group">
          <label for="Email">Username</label>
          <input
            name="username"
            type="text"
            class="form-control"
            // value={form.username}
            // onChange={UpdateField}
          />
        </div>
        <div class="form-group">
          <label for="Email">Email</label>
          <input
            name="username"
            type="text"
            class="form-control"
            // value={form.username}
            // onChange={UpdateField}
          />
        </div>
        <div class="form-group">
          <label for="Email">Password</label>
          <input
            name="username"
            type="text"
            class="form-control"
            // value={form.username}
            // onChange={UpdateField}
          />
        </div>
        <div class="form-group">
          <label for="Password">Confirm Password</label>
          <input
            name="password"
            type="text"
            class="form-control"
            // value={form.password}
            // onChange={UpdateField}
          />
        </div>
      </form>
    </div>
  );
}
