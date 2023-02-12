import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";
import Sidebar from "../Sidebar";

function DashBlogs() {
  const form = useRef();
  const [infos, setUsers] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [infoImage, setInfoImage] = useState(null);
  const [newInfo, setNewInfo] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAdd = async () => {
    const formData = new FormData();
    formData.append("title", newInfo.title);
    formData.append("description", newInfo.description);
    formData.append("image", infoImage);
    //   console.table(formData);
    await axios.post(`http://localhost:5000/blog/postblog`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Added Successfully", 2000);
    loadUsers();
    setNewInfo({
      title: "",
      description: "",
      image: "",
    });
    setInfoImage(null);
  };

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/blog/getblog");
    console.log(result.data);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/blog/deleteblog/${id}`);
    toast.success("Deleted Successfully", 2000);
    loadUsers();
  };

  const handleUpdate = (info) => {
    setSelectedInfo(info);
    setIsUpdateMode(true);
  };

  const updateUser = async () => {
    const formData = new FormData();
    formData.append("title", selectedInfo.title);
    formData.append("description", selectedInfo.description);
    formData.append("image", infoImage);

    await axios.put(
      `http://localhost:5000/blog/updateblog/${selectedInfo._id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toast.success("Updated Successfully", 2000);
    loadUsers();
    setIsUpdateMode(false);
  };
  return (
    <div className="compflex">
      <Sidebar />
      <div className="container-info">
        <div>
          <form
            ref={selectedInfo}
            className="contact-formm"
            encType="multipart/form-data"
          >
            <input
              className="inputadd"
              type="text"
              value={newInfo.title}
              onChange={(e) =>
                setNewInfo({ ...newInfo, title: e.target.value })
              }
              placeholder="Enter Title"
            />
            <input
              className="inputadd"
              type="text"
              value={newInfo.description}
              onChange={(e) =>
                setNewInfo({ ...newInfo, description: e.target.value })
              }
              placeholder="Enter description"
            />
            <input
              className="inputadd"
              type="file"
              value={newInfo.image}
              onChange={(e) => setInfoImage(e.target.files[0])}
            />

            <button className="buttonadd" onClick={handleAdd}>
              Add
            </button>
          </form>
        </div>

        {isUpdateMode && (
          <div className="container-info">
            <input
              className="inputadd"
              type="text"
              value={selectedInfo.title}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, title: e.target.value })
              }
            />
            <input
              className="inputadd"
              type="text"
              value={selectedInfo.description}
              onChange={(e) =>
                setSelectedInfo({
                  ...selectedInfo,
                  description: e.target.value,
                })
              }
            />
            <input
              className="inputadd"
              type="file"
              value={newInfo.image}
              onChange={(e) => setInfoImage(e.target.files[0])}
            />

            <div className="compflexbutton">
              <button className="buttonadd" onClick={updateUser}>
                Save
              </button>
              <button
                className="buttonadd"
                onClick={() => setIsUpdateMode(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">NB</th>
                <th scope="col">Title</th>
                <th scope="col">description</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {infos.map((info, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{info.title}</td>
                  <td>{info.description}</td>
                  <td>{info.image}</td>

                  <td>
                    <button
                      className="buttonedit"
                      onClick={() => handleUpdate(info)}
                    >
                      Edit
                    </button>
                    <button
                      className="buttondelete"
                      onClick={() => deleteUser(info._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default DashBlogs;
