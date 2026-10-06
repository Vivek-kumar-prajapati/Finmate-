

function Budget() {
  return (
    <>
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Budgets</h1>
    <p className="mt-1 text-sm text-slate-500">
      Manage your monthly spending limits
    </p>
  </div>

  <div className="mt-6 grid grid-cols-3 gap-5">
    {[
      ["Food & Dining", "$420", "$600", "70%"],
      ["Shopping", "$280", "$500", "56%"],
      ["Transport", "$180", "$300", "60%"],
      ["Entertainment", "$150", "$200", "75%"],
      ["Bills", "$420", "$450", "93%"],
      ["Health", "$80", "$200", "40%"],
    ].map(([name, spent, total, percent]) => (
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <div className="flex justify-between">
          <h2 className="font-semibold text-slate-800">{name}</h2>
          <span className="text-sm text-slate-500">{percent}</span>
        </div>

        <div className="mt-5 h-2 rounded-full bg-slate-100">
          <div
            className="h-2 rounded-full bg-green-500"
            style={{ width: percent }}
          />
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <span className="text-slate-500">Spent {spent}</span>
          <span className="font-medium">of {total}</span>
        </div>
      </div>
    ))}
  </div>

  <button className="mt-6 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white">
    + Create Budget
  </button>
</>

  )
}

export default Budget