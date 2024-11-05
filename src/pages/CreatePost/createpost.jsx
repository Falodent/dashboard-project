import { useState } from "react";
import FormInput from "../../components/Input/forminput";
import axios from "axios";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    setLoading(true);

    if (title.trim() === "") {
      toast.warning("Title cant be empty");
      setLoading(false);
      return false;
    }

    if (body.trim() === "") {
      toast.warning("Body cant be empty");
      setLoading(false);
      return false;
    }

    await axios
      .post("https://dummyjson.com/posts/add", {
        title,
        body,
        uerId: 200
      })
      .then(() => {
        toast.success("Post has been created successfully!");
        setTitle("");
        setBody("");
        setLoading(false);
      })
      .catch(() => {
        toast.error("An error occured!");
        setLoading(false);
      });
  };

  return (
    <div className="px-24 py-16">
      <p className="mb-4 font-bold text-[36px] text-blue">Create a new post</p>

      <div className="w-[80%] space-y-4">
        <FormInput
          name="title"
          placeholder="Enter a title"
          label="Title"
          value={title}
          setValue={setTitle}
        />

        <FormInput
          name="body"
          placeholder="Enter the body"
          label="Body"
          value={body}
          setValue={setBody}
        />

        <button
          className="bg-blue p-4 rounded-lg text-white"
          onClick={handleSubmit}
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </div>
    </div>
  );
};
export default CreatePost;
