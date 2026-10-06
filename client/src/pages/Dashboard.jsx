
function Dashboard() {
  return (
    <>
    <div className="flex  bg-slate-50">
    <main className="flex-1 p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Good morning, Alex 👋
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Here's your financial overview
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Balance</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              $24,580.00
            </h2>
            <p className="mt-2 text-xs text-green-600">
              ↑ 8.2% this month
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Income</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              $6,240.00
            </h2>
            <p className="mt-2 text-xs text-green-600">
              ↑ 4.5% this month
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Expenses</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              $3,840.00
            </h2>
            <p className="mt-2 text-xs text-red-500">
              ↑ 2.1% this month
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Savings</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              $2,400.00
            </h2>
            <p className="mt-2 text-xs text-green-600">
              38.5% of income
            </p>
          </div>

        </div>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Spending */}
          <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Spending Overview
                </h2>
                <p className="text-sm text-slate-500">
                  Your spending this month
                </p>
              </div>

              <select className="rounded-lg border px-3 py-2 text-sm text-slate-600">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>

            {/* Simple chart */}
            <div className="mt-8 flex h-52 items-end gap-4">
              {[45, 70, 55, 85, 60, 90, 65, 75, 50, 80, 65, 95].map(
                (height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-green-400"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

            <div className="mt-3 flex justify-between text-xs text-slate-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Budget */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">
              Monthly Budget
            </h2>

            <div className="mt-6 text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-14 border-green-400">
                <div>
                  <p className="text-xl font-bold text-slate-900">72%</p>
                  <p className="text-xs text-slate-400">used</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between text-sm">
              <span className="text-slate-500">Spent</span>
              <span className="font-semibold">$3,840</span>
            </div>

            <div className="mt-2 flex justify-between text-sm">
              <span className="text-slate-500">Remaining</span>
              <span className="font-semibold text-green-600">
                $1,460
              </span>
            </div>
          </div>

        </div>

        {/* Recent Transactions */}
        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">
              Recent Transactions
            </h2>
            <button className="text-sm font-medium text-green-600">
              View all
            </button>
          </div>

          <div className="space-y-4">

            {[
              ["Grocery Store", "Today", "-$84.50"],
              ["Netflix", "Yesterday", "-$15.99"],
              ["Salary", "Oct 1", "+$4,200.00"],
              ["Coffee Shop", "Sep 30", "-$6.50"],
            ].map(([name, date, amount]) => (
              <div
                key={name}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {name}
                  </p>
                  <p className="text-xs text-slate-400">{date}</p>
                </div>

                <p
                  className={`text-sm font-semibold ${
                    amount.startsWith("+")
                      ? "text-green-600"
                      : "text-slate-700"
                  }`}
                >
                  {amount}
                </p>
              </div>
            ))}

          </div>
        </div>

      </main>
    </div>
    
    </>
  )
}

export default Dashboard