import React, { useState } from "react";

function PrintInput() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [submit, submitted] = useState(false);

  const updateForm = (e) => {
    e.preventDefault();
    setForm({
      username: data.username,
      password: data.password,
    });
    submitted(true);
  };

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={updateForm}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={updateData}
          placeholder="enter name"
        />
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={updateData}
          placeholder="enter password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{submit ? form.username : null}</p>
      <p>{submit ? form.password : null}</p>
    </div>
  );
}

export default PrintInput;
