import Button from "./Button";

export default function NoProjectSelected ({onSelectProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
        <img src="src\assets\no-projects.png" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold my-4 text-stone-400"> No Project Selected </h2>
        <p className="text-stone-400 mb-4">Select a new Project or get Started with new one</p>
        <p className="mt-8">
            <Button onClick = {onSelectProject}>Create a new project</Button>
        </p>
        </div>
    )
}