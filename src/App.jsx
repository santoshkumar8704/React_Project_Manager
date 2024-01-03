import { useRef, useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
function App (){
  const [projectState , setProjectState] = useState({projectId: undefined,
    projects: []
  })
  
function handleClick () {
  
  setProjectState(prevProjectState => {return{
    ...prevProjectState,
    projectId : null
  }})
}
function handleAddProject (projectData) {
  setProjectState(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random()
    };

    return {
      ...prevState,
      projects : [prevState.projects,newProject]
    }
  })
}
let content;
console.log(projectState)
if(projectState.projectId === null){
  content = <NewProject onAdd={handleAddProject} />
}
else if (projectState.projectId === undefined){
  content = <NoProjectSelected onSelectProject ={handleClick} />
}

  return (
    <main className="h-screen my-8 flex gap-6">
      <SideBar onSelectProject ={handleClick}/>
      {content}
    </main>
  );
}

export default App;
