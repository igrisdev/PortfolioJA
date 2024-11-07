export const ButtonNameFloating = ({ children, message, id, className }) => {
  const stiles = className
    ? "group/item relative text-P-text-primary"
    : "group/item relative text-P-text-primary bg-P-background-tertiary px-5 py-2 rounded-lg";
  return (
    <button id={id} className={stiles}>
      {children}
      <span className="absolute text-black text-xs w-max bg-P-background-secondary p-1 rounded-lg font-medium group-hover/item:opacity-100 opacity-0 -top-12 right-1/2 translate-x-1/2 translate-y-1/2 transition-all duration-300">
        {message}
      </span>
    </button>
  );
};
