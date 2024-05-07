import React, { useState } from "react";
import axios from "axios";

export const AddForm = ({ handleFormSubmit }) => {
  const [data, setData] = useState({ title: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        handleFormSubmit(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            rows="4"
            cols="50"
            placeholder="Text..."
            value={data.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <input type="submit" />
      </form>
    </>
  );
};
