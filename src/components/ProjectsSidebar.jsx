import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onProjectSelect,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 h-full px-6 py-12 bg-linear-to-b from-cyan-500 to-cyan-700 md:w-72 rounded-r-2xl shadow-2xl backdrop-blur-sm">
      <h2 className="mb-8 text-xl font-extrabold uppercase tracking-wider text-white">
        Your Projects
      </h2>

      <Button
        className="w-full bg-white text-cyan-700 font-semibold py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
        onClick={onStartAddProject}
      >
        + Add Project
      </Button>

      <ul className="space-y-3 pt-6">
        {projects.map(({ title, id }) => {
          let cssClasses =
            "w-full text-left px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 font-medium";

          if (id === selectedProjectId) {
            cssClasses += " bg-black/30 text-white shadow-md scale-[1.02]";
          } else {
            cssClasses +=
              " bg-white/10 text-white hover:bg-white/20 hover:translate-x-1";
          }

          return (
            <li key={id}>
              <button
                className={cssClasses}
                onClick={() => onProjectSelect(id)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
