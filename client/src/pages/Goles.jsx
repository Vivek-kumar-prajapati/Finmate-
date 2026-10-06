

function Goles() {
  return (
    <>
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Financial Goals</h1>
      <p className="mt-1 text-sm text-slate-500">
        Turn your plans into achievable goals
      </p>
    </div>

    <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white">
      + New Goal
    </button>
  </div>

  <div className="mt-6 grid grid-cols-3 gap-5">
    {[
      ["Emergency Fund", "$7,500", "$10,000", "75%"],
      ["New Laptop", "$1,200", "$2,000", "60%"],
      ["Vacation", "$2,400", "$3,000", "80%"],
    ].map(([name, saved, target, percent]) => (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">{name}</h2>
          <span className="text-2xl">🎯</span>
        </div>

        <p className="mt-6 text-2xl font-bold text-slate-900">{saved}</p>
        <p className="text-sm text-slate-400">of {target}</p>

        <div className="mt-5 h-2 rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-green-500"
            style={{ width: percent }}
          />
        </div>

        <p className="mt-2 text-right text-xs text-slate-400">{percent}</p>
      </div>
    ))}
  </div>
</>

  )
}

export default Goles