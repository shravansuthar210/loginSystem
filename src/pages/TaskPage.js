import { useState } from "react";
import Model from "../component/Model";
import ProjectCard from "../component/ProjectCard";
import TaskCard from "../component/TaskCard";
const TaskPage = () => {
  // mock data
  const task = [
    {
      name: "Test Project",
      createTime: "12:09 PM",
      completeTaskDate: "01:12 PM",
    },
    {
      name: "Test Project",
      createTime: "12:09 PM",
      completeTaskDate: "01:12 PM",
    },
    {
      name: "Test Project",
      createTime: "12:09 PM",
      completeTaskDate: "01:12 PM",
    },
    {
      name: "Test Project",
      createTime: "12:09 PM",
      completeTaskDate: "01:12 PM",
    },
  ];
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
  return (
    <div>
      {model && (
        <Model
          onchangeText={onchangeText}
          closeModel={closeModel}
          onSubmit={onSubmit}
          value={data.task}
          name={"task"}
        />
      )}
      <header className="App-header">
        <h1>Task Manager</h1>
        <button>LogOut</button>
      </header>
      <div className="commonContainer">
        <div className="dashboardContainer">
          {task.map((item, index) => (
            <TaskCard project={item} key={`${item.name}${index}`} />
          ))}
          <div onClick={openModel} className="eachProject">
            <h1>+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
