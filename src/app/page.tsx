export default function Home() {
  return (
    <main className="flex justify-center p-2">
      <div className="flex flex-col gap-2 md:min-w-80 lg:min-w-96">
        <label htmlFor="todo" className="text-left">
          Add your ToDo point?
        </label>
        <div className="flex flex-row">
          <input
            className="w-full rounded-l-sm px-3 py-1 text-slate-800 outline-none"
            type="text"
            name="todo"
          />
          <button className="rounded-r-sm bg-blue-600 px-5 py-1">ADD</button>
        </div>
      </div>
    </main>
  );
}
