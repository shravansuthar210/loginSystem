import { useState } from "react";
import InputText from "../component/InputText"

const RegisterPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confromPassword:""
  });
  const onSubmit = (e) => {
    e.preventDefault()
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
        <InputText label={"Password"} value={data.password} name={"password"} />
        <InputText label={"Conform Password"} value={data.confromPassword} name={"confromPassword"} />

        <button className="btn">Register</button>
        <a href="/login">Login</a>
      </form>
    </div>
  );
};

export default RegisterPage;
