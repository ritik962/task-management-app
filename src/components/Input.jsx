const Input = ({ textarea, label, ...props }) => {
  const inputClasses =
    "w-full bg-white/80 backdrop-blur-sm border border-cyan-300 rounded-lg px-4 py-2.5 text-gray-800 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 hover:border-cyan-400";

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </label>

      {textarea ? (
        <textarea className={`${inputClasses} resize-none `} {...props} />
      ) : (
        <input className={inputClasses} {...props} />
      )}
    </div>
  );
};

export default Input;
