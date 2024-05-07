import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { connect } from "react-redux";

const url = "http://jsonplaceholder.typicode.com/posts";

function List({ dispatch }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    dispatch({ type: "EDIT", payload: id });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
                <td>
                  <MdDelete onClick={() => handleDelete(el.id)} />
                </td>
                <td>
                  <FaEdit onClick={() => handleEdit(el.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default connect()(List);
