const TaskCard=({project})=>{
    const {name}=project
    return (
        <div className="eachProject">
        <h4 className="taskTitle">{name}</h4>
        <div className="eachProjectAction">
          <button className="actionBtn bg-blue">Edit</button>
          <button className="actionBtn bg-green">Mark Complete</button>
          <button className="actionBtn bg-red">Delete</button>
        </div>
      </div>
    )
}

export default TaskCard