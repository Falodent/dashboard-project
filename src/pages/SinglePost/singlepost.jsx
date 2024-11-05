import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SinglePost = () => {
  const path = window.location.href;
  const url = path.split("/");
  const id = url[url.length - 1];

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  const getData = async () => {
    setLoading(true);

    const response = await axios.get(`https://dummyjson.com/posts/${id}`);

    if (response?.statusText === "OK") {
      setPost(response.data);
    } else {
      console.error(response);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <div>
          <Link to="/posts">Go Back</Link>
          <p>
            {post?.title} - {post?.views} VIEWS
          </p>
          <br />
          <p>{post?.body}</p>
        </div>
      )}
    </div>
  );
};
export default SinglePost;
