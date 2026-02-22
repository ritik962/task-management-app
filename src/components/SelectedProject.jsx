import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-(--project-width) p-8 bg-white rounded-2xl shadow-xl border border-gray-200 space-y-4 overflow-y-scroll">
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            {project.title}
          </h1>

          <button
            onClick={() => onDelete(project.id)}
            className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-all duration-200 hover:scale-105"
          >
            Delete
          </button>
        </div>

        <p className="text-sm text-gray-500 font-medium">
          Due on {formattedDate}
        </p>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      </header>
      {/* Project Tasks */}
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
