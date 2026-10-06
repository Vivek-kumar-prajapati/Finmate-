

function Transections() {
  return (
    <>
  <div className="flex items-center  justify-between">
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Transactions</h1>
      <p className="mt-1 text-sm text-slate-500">
        Track all your income and expenses
      </p>
    </div>

    <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white">
      + Add Transaction
    </button>
  </div>

  {/* Filters */}
  <div className="mt-6 flex gap-3">
    <input
      placeholder="Search transactions..."
      className="w-72 rounded-lg border bg-white px-4 py-2 text-sm outline-none"
    />

    <select className="rounded-lg border bg-white px-4 py-2 text-sm">
      <option>All Categories</option>
      <option>Food</option>
      <option>Shopping</option>
      <option>Transport</option>
    </select>

    <select className="rounded-lg border bg-white px-4 py-2 text-sm">
      <option>All Types</option>
      <option>Income</option>
      <option>Expense</option>
    </select>
  </div>

  {/* Table */}
  <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
    <div className="grid grid-cols-5 border-b px-6 py-4 text-xs font-medium text-slate-400">
      <span>Transaction</span>
      <span>Category</span>
      <span>Date</span>
      <span>Status</span>
      <span className="text-right">Amount</span>
    </div>

    {[
      ["Salary", "Income", "Oct 1, 2026", "+$4,200"],
      ["Grocery Store", "Food", "Oct 3, 2026", "-$84.50"],
      ["Netflix", "Entertainment", "Oct 2, 2026", "-$15.99"],
      ["Uber", "Transport", "Oct 2, 2026", "-$24.50"],
      ["Amazon", "Shopping", "Oct 1, 2026", "-$120.00"],
    ].map(([name, category, date, amount]) => (
      <div className="grid grid-cols-5 items-center border-b px-6 py-5 text-sm">
        <span className="font-medium text-slate-800">{name}</span>
        <span className="text-slate-500">{category}</span>
        <span className="text-slate-500">{date}</span>
        <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
          Completed
        </span>
        <span className="text-right font-semibold">{amount}</span>
      </div>
    ))}
  </div>
</>

  )
}

export default Transections