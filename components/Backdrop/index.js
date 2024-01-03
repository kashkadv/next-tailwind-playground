export default function Backdrop({ children, clickEvent }) {
  return (
    <>
      <div
        onClick={clickEvent}
        className="animate-fadeIn fixed left-0 top-0 h-lvh w-full bg-gray-900/50 backdrop-blur-[2px]"
      ></div>
      {children}
    </>
  );
}
