import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="w-(--project-width) flex flex-col items-center justify-center text-center px-8 py-20 bg-linear-to-br from-white to-cyan-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 max-w-md w-full">
        <img
          src={noProjectImage}
          alt="An empty task list"
          className="h-20 w-20 object-contain mx-auto mb-6 opacity-90"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          No Project Selected
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Select an existing project or create a new one to get started.
        </p>

        <Button
          className="px-6 py-2.5 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 hover:scale-105 transition-all duration-200"
          onClick={onStartAddProject}
        >
          Create New Project
        </Button>
      </div>
    </div>
  );
};

export default NoProjectSelected;
