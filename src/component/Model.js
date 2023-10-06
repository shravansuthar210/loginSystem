import InputText from "./InputText";
const Model = ({
  onSubmit,
  onchangeText,
  value,
  closeModel,
  name,
  label = "Add new Task",
}) => {
  return (
    <div className="model" onClick={closeModel}>
      <form className="form modelform" onSubmit={onSubmit}>
        <InputText
          label={label}
          onchangeText={onchangeText}
          value={value}
          name={name}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default Model;
