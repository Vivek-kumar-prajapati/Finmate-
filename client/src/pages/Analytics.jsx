

function Analytics() {
  return (
   <>
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
    <p className="mt-1 text-sm text-slate-500">
      Understand where your money goes
    </p>
  </div>

  <div className="mt-6 grid grid-cols-3 gap-5">
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">Total Income</p>
      <h2 className="mt-2 text-2xl font-bold">$18,240</h2>
      <p className="mt-2 text-xs text-green-600">+12.5%</p>
    </div>

    <div className="rounded-xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">Total Expenses</p>
      <h2 className="mt-2 text-2xl font-bold">$11,640</h2>
      <p className="mt-2 text-xs text-red-500">+4.8%</p>
    </div>

    <div className="rounded-xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">Savings Rate</p>
      <h2 className="mt-2 text-2xl font-bold">36.2%</h2>
      <p className="mt-2 text-xs text-green-600">+3.2%</p>
    </div>
  </div>

  <div className="mt-6 grid grid-cols-2 gap-6">
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-semibold">Income vs Expenses</h2>

      <div className="mt-8 flex h-56 items-end gap-5">
        {[70, 50, 85, 60, 90, 65].map((h) => (
          <div
            className="flex-1 rounded-t bg-green-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>

    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-semibold">Spending by Category</h2>

      <div className="mt-6 space-y-5">
        {[
          ["Food", "32%", "bg-green-500"],
          ["Shopping", "24%", "bg-blue-500"],
          ["Bills", "20%", "bg-purple-500"],
          ["Transport", "14%", "bg-orange-400"],
          ["Other", "10%", "bg-slate-400"],
        ].map(([name, value, color]) => (
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>{name}</span>
              <span>{value}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100">
              <div className={`h-2 rounded-full ${color}`} style={{ width: value }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>

  )
}

export default Analytics