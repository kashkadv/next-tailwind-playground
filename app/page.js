"use client";

import Button from "@/components/Button";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "next-themes";

export default function Page() {
  return (
    <ThemeProvider attribute="class">
      <main className="p-5">
        <ThemeSwitcher />

        <h1 className="typography-h1 text-center text-blue-400">
          Hello world!
        </h1>

        <button className="btn btn--danger">Button</button>

        <div className="my-10 w-full rounded-md border-violet-600 bg-violet-200 p-2">
          <p className="text-shtyl text-center font-mono font-extrabold">
            A div
          </p>
        </div>

        <div className="fixed top-0 h-10 w-10 bg-red-500"></div>
        <div className="flex justify-between">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        </div>

        <div className="mt-4 grid grid-cols-1 justify-center gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="h-12 bg-red-300"></div>
          <div className="h-12 bg-red-300"></div>
          <div className="h-12 bg-red-300"></div>
          <div className="h-12 bg-red-300"></div>
          <div className="h-12 bg-red-300"></div>
        </div>

        <ul className="my-12 space-y-2">
          <li className="p-3 odd:bg-red-300 even:bg-slate-200">Item</li>
          <li className="p-3 odd:bg-red-300 even:bg-slate-200">Item</li>
          <li className="p-3 odd:bg-red-300 even:bg-slate-200">Item</li>
          <li className="p-3 odd:bg-red-300 even:bg-slate-200">Item</li>
          <li className="p-3 odd:bg-red-300 even:bg-slate-200">Item</li>
        </ul>

        <div className="grid grid-cols-4 space-x-4">
          <div className="rounded-lg bg-white px-6 py-8 shadow-xl shadow-neutral-200 dark:bg-black dark:shadow-none dark:shadow-neutral-700">
            <h3 className="font-extrabold">This is a text el</h3>
            <p>This is a p tag longer el</p>
          </div>
          <div className="rounded-lg bg-white px-6 py-8 shadow-xl shadow-neutral-200 dark:bg-black dark:shadow-none dark:shadow-neutral-700">
            <h3 className="font-extrabold">This is a text el</h3>
            <p>This is a p tag longer el</p>
          </div>
          <div className="rounded-lg bg-white px-6 py-8 shadow-xl shadow-neutral-200 dark:bg-black dark:shadow-none dark:shadow-neutral-700">
            <h3 className="font-extrabold">This is a text el</h3>
            <p>This is a p tag longer el</p>
          </div>
          <div className="rounded-lg bg-white px-6 py-8 shadow-xl shadow-neutral-200 dark:bg-black dark:shadow-none dark:shadow-neutral-700">
            <h3 className="font-extrabold">This is a text el</h3>
            <p>This is a p tag longer el</p>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
