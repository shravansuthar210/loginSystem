import { useContext, useState } from "react";
import InputText from "../component/InputText";
import Context from "../context";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
const navigate= useNavigate()

const value = useContext(Context);
  console.log("value", value);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    value.setData({ ...data });
    navigate("/dashboard")
  };
  const onchangeText = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <InputText
          label={"Email"}
          onchangeText={onchangeText}
          value={data.email}
          name={"email"}
        />
        <InputText
          label={"Password"}
          type={"password"}
          value={data.password}
          onchangeText={onchangeText}
          name={"password"}
        />
        <button className="btn">login</button>
        <a href="/register">Register</a>
      </form>
    </div>
  );
};

export default LoginPage;
