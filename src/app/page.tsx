export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-8">
      <div className="rounded-md border border-white p-4">
        <div className="flex flex-col items-center gap-2 md:min-w-48 lg:min-w-32">
          <label htmlFor="todo" className="text-left">
            Add your ToDo
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
      </div>
      <div className="rounded-md border border-white p-4">
        <ul className="flex flex-col gap-4">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Id suscipit porro numquam consectetur.</li>
          <li>Voluptatum nostrum consectetur ea possimus?</li>
        </ul>
      </div>
    </main>
  );
}
