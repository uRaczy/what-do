import { Todo } from "../components/Organisms";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-8 bg-gray-400 dark:bg-gray-800">
      {/* <div className="flex w-full flex-col items-center gap-2 rounded-md border border-white p-4">
          <label htmlFor="todo" className="text-left">
            Add your ToDo
          </label>
          <div className="flex w-full flex-row">
            <input
              className="w-full rounded-l-sm px-3 py-1 text-slate-800 outline-none"
              type="text"
              name="todo"
            />
            <EventButton title="Add point" onClick={() => console.log("hi")} />
          </div>
        </div>
        <div className="w-full rounded-md border border-white p-4">
          <ul className="flex flex-col gap-4">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Id suscipit porro numquam consectetur.</li>
            <li>Voluptatum nostrum consectetur ea possimus?</li>
          </ul>
        </div> */}
      <Todo />
    </main>
  );
}
