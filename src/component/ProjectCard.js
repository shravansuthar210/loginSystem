const ProjectCard=({project})=>{
    const {name}=project
    return (
        <div className="eachProject">
        <h4>{name}</h4>
        <div className="eachProjectAction">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
}



export default ProjectCard