/* eslint-disable no-undef */
import { useState } from "react";
import FormInput from "../../components/Input/forminput";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";

const Login = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post(`${baseUrl}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        Cookies.set("Profile", JSON.stringify(res.data));
        toast.success("Login was successful");
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-8">
      <p className="text-2xl text-blue">User Login</p>
      <div className="w-[60%] space-y-4">
        <FormInput
          name="username"
          label="Username"
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <FormInput
          name="password"
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        <button
          className="bg-blue p-4 rounded-lg text-white"
          onClick={handleSubmit}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Login;
