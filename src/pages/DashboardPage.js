import { useState } from "react";
import ProjectCard from "../component/ProjectCard";
import Model from "../component/Model";

const DashboardPage = () => {
  // mock data
  const [data, setData] = useState({
    task: "",
  });
  const [model, setModel] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onchangeText = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    console.log("close model");
    setModel(false);
  };

  const project = [
    {
      name: "Test Project",
      createTime: "12:09 PM",
    },
  ];

  return (
    <div>
      {model && (
        <Model
          onchangeText={onchangeText}
          closeModel={closeModel}
          onSubmit={onSubmit}
          value={data.task}
          name={"task"}

          label="Add New Project"
        />
      )}
      <header className="App-header">
        <h1>Dashboard</h1>
        <button>LogOut</button>
      </header>
      <div className="dashboardContainer">
        {project.map((item, indx) => (
          <ProjectCard project={item} key={item.name}/>
        ))}
        <div className="eachProject" onClick={openModel}>
          <h1>+</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
