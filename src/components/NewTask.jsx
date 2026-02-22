import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleClick = () => {
    if (!enteredTask.trim()) return;
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-3">
      <input
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2.5 rounded-lg border border-cyan-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
      />

      <button
        onClick={handleClick}
        className="px-5 py-2.5 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 hover:scale-105 transition-all duration-200"
      >
        Add
      </button>
    </div>
  );
};

export default NewTask;
