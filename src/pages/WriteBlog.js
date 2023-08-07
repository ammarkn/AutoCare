import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WriteBlog() {
  const userId = localStorage.getItem("userID");

  const navigate = useNavigate();

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const getCurrentDate = () => {
    const currentDate = new Date();
    const currentDateISOString = currentDate.toISOString();
    return currentDateISOString;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title:", blogTitle);
    console.log("Content:", blogContent);

    console.log('hello')

    const newBlog = {
      user_id: userId,
      title: blogTitle,
      description: blogContent,
      date_posted: getCurrentDate()
    };

    await axios
      .post("https://csci-4177-grp-21.onrender.com/addBlog", newBlog)
      .then((response) => {
        console.log(response.data);
        alert("blog Added Successfully!");
        navigate('/blogs')
      })
      .catch((error) => {
        console.error(error);
        alert("There was some error, Please try again.");
      });
  };

  const handleTitleChange = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setBlogContent(event.target.value);
  };

  return (
    <div className="main-write-blogs-page">
      <form onSubmit={handleSubmit}>
        <h5 style={{ fontSize: "18px" }}>Write a Maintenance Blog</h5>

        <br></br>

        <h5>TITLE</h5>
        <input
          type="text"
          placeholder="Add Blog Title"
          value={blogTitle}
          onChange={handleTitleChange}
        />

        <h5>CONTENT {getCurrentDate()}</h5>
        <textarea
          placeholder="Add Blog Content"
          value={blogContent}
          onChange={handleContentChange}
        ></textarea>

        <br></br>

        <button type="submit">Post Maintenance Blog</button>
      </form>
    </div>
  );
}

export default WriteBlog;
