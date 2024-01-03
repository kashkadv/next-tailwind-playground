export default function Backdrop({ children, clickEvent, status }) {
  const classes = {
    closed: "opacity-0",
    opened: "animate-fadeIn",
    closing: "animate-fadeOut",
  };

  return (
    <div className={`group ${status} fixed left-0 top-0`}>
      <div
        onClick={clickEvent}
        className={`fixed left-0 top-0 h-lvh w-full cursor-pointer bg-slate-700/50 backdrop-blur-[2px] ${classes[status]}`}
      ></div>
      {children}
    </div>
  );
}
