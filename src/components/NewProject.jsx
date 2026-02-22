import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal buttonCaption="Okay" ref={modalRef}>
        <h2 className="text-2xl font-bold text-gray-800">Invalid Input</h2>
        <p className="text-gray-600">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-gray-600">
          Please make sure to provide a valid value for every input field.
        </p>
      </Modal>

      <div className="w-(--project-width) px-8 py-14 bg-linear-to-br from-cyan-50 to-white">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <menu className="flex gap-4 items-center justify-end mb-8">
            <li>
              <button
                onClick={onCancel}
                className="px-5 py-2.5 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
              >
                Cancel
              </button>
            </li>

            <li>
              <button
                className="px-6 py-2.5 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 hover:scale-105 transition-all duration-200"
                onClick={handleSave}
              >
                Save Project
              </button>
            </li>
          </menu>

          <div className="space-y-6">
            <Input ref={titleRef} label="Title" type="text" />
            <Input ref={descriptionRef} label="Description" textarea />
            <Input ref={dueDateRef} label="Due Date" type="date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
