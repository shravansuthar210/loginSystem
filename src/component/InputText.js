const InputText = ({ label, type = "text", value, onchangeText, name }) => {
  return (
    <div className="inputTextDiv">
      <label>{label}</label>
      <input
        type={type}
        className="input"
        name={name}
        value={value}
        onChange={onchangeText}
      />
    </div>
  );
};

export default InputText;
