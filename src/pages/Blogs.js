import "./css/Blogs.css";
import { useNavigate } from "react-router-dom";
import AllBlogs from "../components/AllBlogs";

function Blogs() {
    const navigate = useNavigate();

    const handleWriteBlog = () => {
        navigate("/writeBlog");
    };

    return (
        <div className="main-blogs-page">
            <div className="main-blogs-form-heading">Maintenance Blogs</div>
            <div className="main-blogs-form-subheading">
                Ready to Share Your Car Insights? Write a Maintenance Blog!
            </div>
            <button onClick={handleWriteBlog}>Write a Blog</button>

            <AllBlogs></AllBlogs>
        </div>
    );
}

export default Blogs;
