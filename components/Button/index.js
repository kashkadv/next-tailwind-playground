"use client";

export default function Button({ action, label, style = "default" }) {
  const styleClasses = {
    default:
      "w-fit bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black py-2 px-4 rounded-md cursor-pointer transition-all focus:outline-none focus:ring-slate-700 active:bg-blue-300",
  };

  return (
    <button className={styleClasses[style]} onClick={action}>
      {label}
    </button>
  );
}
