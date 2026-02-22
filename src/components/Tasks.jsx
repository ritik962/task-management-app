import NewTask from "./NewTask";

const Tasks = ({ onAdd, onDelete, tasks }) => {
  return (
    <section className="mt-10 bg-white  rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
      <h2 className="uppercase text-sm tracking-wider font-bold text-gray-500">
        Tasks
      </h2>

      <NewTask onAdd={onAdd} />

      {tasks && tasks.length > 0 ? (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-gray-700 font-medium">{task.task}</span>

              <button
                onClick={() => onDelete(task.id)}
                className="text-sm text-red-500 font-semibold hover:text-red-600 transition-colors duration-200"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center py-8">
          This project does not have any tasks yet.
        </p>
      )}
    </section>
  );
};

export default Tasks;
