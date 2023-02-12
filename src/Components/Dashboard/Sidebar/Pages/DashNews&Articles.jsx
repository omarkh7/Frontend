import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";
import Sidebar from "../Sidebar";

function DashNewsArticles() {
  const form = useRef();
  const [infos, setUsers] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [infoImage, setInfoImage] = useState(null);
  const [newInfo, setNewInfo] = useState({
    info_title: "",
    info_description: "",
    info_image: null,
    info_category: "News & Articles",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAdd = async () => {
    const formData = new FormData();
    formData.append("info_title", newInfo.info_title);
    formData.append("info_description", newInfo.info_description);
    formData.append("info_image", infoImage);
    formData.append("info_category", newInfo.info_category);
  
    await axios.post(`http://localhost:5000/info`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Added Successfully", 2000);
    loadUsers();
    setNewInfo({
      info_title: "",
      info_description: "",
      info_image: "",
      info_category: "News & Articles",
    });
      setInfoImage(null);
  };
  
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/info");
    console.log(result.data);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/info/${id}`);
    toast.success("Deleted Successfully", 2000);
    loadUsers();
  };

  const handleUpdate = (info) => {
    setSelectedInfo(info);
    setIsUpdateMode(true);
  };

  const updateUser = async () => {
    const formData = new FormData();
    formData.append("info_title", selectedInfo.info_title);
    formData.append("info_description", selectedInfo.info_description);
    formData.append("info_image", infoImage);
    formData.append("info_category", selectedInfo.info_category);
  
    await axios.put(
      `http://localhost:5000/info/${selectedInfo._id}`,
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
            value={newInfo.info_title}
            onChange={(e) =>
              setNewInfo({ ...newInfo, info_title: e.target.value })
            }
            placeholder="Enter Title"
          />
          <input
            className="inputadd"
            type="text"
            value={newInfo.info_description}
            onChange={(e) =>
              setNewInfo({ ...newInfo, info_description: e.target.value })
            }
            placeholder="Enter Description"
          />
              <input
            className="inputadd"
            type="file"
            value={newInfo.info_image}
            onChange={(e) =>
              setInfoImage( e.target.files[0] )
            }
           
          />
        
          <input
            className="inputadd"
            type="text"
            disabled="true"
            value={newInfo.info_category}
            onChange={(e) =>
              setNewInfo({ ...newInfo, info_category: e.target.value })
            }
            placeholder="Enter Category"
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
              value={selectedInfo.info_title}
              onChange={(e) =>
                setSelectedInfo({ ...selectedInfo, info_title: e.target.value })
              }
            />
            <input
              className="inputadd"
              type="text"
              value={selectedInfo.info_description}
              onChange={(e) =>
                setSelectedInfo({
                  ...selectedInfo,
                  info_description: e.target.value,
                })
              }
            />
             <input
              className="inputadd"
              type="file"
              value={newInfo.info_image}
              onChange={(e) =>
                setInfoImage(e.target.files[0],
                )
              }
            />
   
            <input
              className="inputadd"
              type="text"
              value={selectedInfo.info_category}
              onChange={(e) =>
                setSelectedInfo({
                  ...selectedInfo,
                  info_category: e.target.value,
                })
              }
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
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {infos
                .filter((info) => info.info_category[0] === "Certifications")
                .map((info, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{info.info_title}</td>
                    <td>{info.info_description}</td>
                    <td>{info.info_image}</td>


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

export default DashNewsArticles;
