import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Posts = () => {
  //CRUD - CREATE, READ, UPDATE, DELETE
  //POST REQUEST, GET REQUEST, PUT REQUEST, DELETE REQUEST

  //get request / read operation
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    setLoading(true);
    await axios
      .get("https://dummyjson.com/posts", {
        params: {
          limit: 20,
        },
      })
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    toast.info(`Your post with an id of ${id} is being deleted...`);
    await axios
      .delete(`https://dummyjson.com/posts/${id}`)
      .then(() => {
        toast.success("Post deleted succesfully!");
      })
      .catch(() => {
        toast.error("An error occured");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-24 py-10">
      <div className="w-[80%] flex justify-between items-center">
        <p className="mb-4 font-bold text-[36px] text-blue">All Posts</p>
        <Link
          to="/posts/create"
          className="px-8 py-4 bg-blue rounded-lg text-white"
        >
          Create
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          posts.map((items) => (
            <p
              key={items?.id}
              className="w-[80%] p-4 border border-[#214aa0] rounded-lg flex justify-between"
            >
              {items?.title}{" "}
              <div className="flex gap-2">
                <Link
                  to={`/posts/${items.id}`}
                  className="px-5 bg-[#214aa0] text-white"
                >
                  View
                </Link>
                <button
                  className="px-5 bg-red-500 text-white"
                  onClick={() => handleDelete(items.id)}
                >
                  Delete
                </button>
              </div>
            </p>
          ))
        )}
      </div>
    </div>
  );
};
export default Posts;
