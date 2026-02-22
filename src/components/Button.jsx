const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-3 rounded-md cursor-pointer text-xs md:text-base ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
