import "./css/Blogs.css";
import { useNavigate } from "react-router-dom";
import AllBlogs from "../components/AllBlogs";

function Blogs() {

    const navigate = useNavigate();

    const handleWriteBlog = () => {
        navigate('/writeBlog');
    }

    return (
        <div className="main-blogs-page">
            <button onClick={handleWriteBlog}>Write a Blog</button>

            <AllBlogs></AllBlogs>
        </div>
    );
}

export default Blogs
