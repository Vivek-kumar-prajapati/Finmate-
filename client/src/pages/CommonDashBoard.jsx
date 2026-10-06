import Navbar from "../components/Navbar"


function CommonDashBoard() {
  return (
    

    <>
    <Navbar/>

    <section className="  bg-linear-to-br from-white via-white to-emerald-50/70 overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-16 lg:px-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          
          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Smart Finance Management
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-6xl">
            Take Control
            <br />
            of Your{" "}
            <span className="text-emerald-500">Finances</span>
            <br />
            with FinMate
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
            Track expenses, set budgets, achieve goals, and get
            AI-powered insights — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-5">
            <button className="flex items-center gap-3 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600">
              Get Started Free
              <span>→</span>
            </button>

            <button className="flex items-center gap-3 text-sm font-semibold text-slate-600">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-xs text-emerald-500">
                ▶
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative hidden h-112.5 w-1/2 lg:block">

          {/* Background Circle */}
          <div className="absolute right-10 top-12 h-95 w-95 rounded-full bg-emerald-100" />
          <div className="absolute right-24 top-24 h-80 w-[320px] rounded-full bg-emerald-200/60" />

          {/* Balance Card */}
          <div className="absolute right-0 top-5 z-20 w-56 rounded-2xl bg-white p-5 shadow-xl shadow-emerald-900/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Total Balance
              </span>

              <span className="text-xl text-emerald-500">↗</span>
            </div>

            <h2 className="mt-1 text-2xl font-bold text-slate-800">
              ₹52,450
            </h2>

            {/* Chart */}
            <div className="mt-5 flex h-16 items-end gap-2">
              <div className="w-full rounded-t bg-emerald-200 h-[30%]" />
              <div className="w-full rounded-t bg-emerald-300 h-[45%]" />
              <div className="w-full rounded-t bg-emerald-400 h-[40%]" />
              <div className="w-full rounded-t bg-emerald-400 h-[60%]" />
              <div className="w-full rounded-t bg-emerald-500 h-[78%]" />
              <div className="w-full rounded-t bg-emerald-500 h-full" />
            </div>

            <div className="mt-2 flex justify-between text-[9px]">
              <span className="text-slate-400">
                Monthly Growth
              </span>

              <span className="font-bold text-emerald-500">
                +12.5%
              </span>
            </div>
          </div>

          {/* Person Illustration */}
          <div className="absolute bottom-5 right-36 z-10">
            
            {/* Head */}
            <div className="relative mx-auto h-20 w-20 rounded-full bg-orange-200">
              <div className="absolute left-4 top-1 text-5xl">
                👨🏻
              </div>
            </div>

            {/* Body */}
            <div className="relative h-48 w-40 rounded-t-[80px] rounded-b-2xl bg-emerald-500">
              <div className="absolute -right-12 top-16 h-7 w-28 rotate-12 rounded-full bg-orange-200" />
            </div>

            {/* Laptop */}
            <div className="absolute -bottom-2 -right-16 z-20 flex h-20 w-36 rotate-[-5deg] items-center justify-center rounded-lg bg-slate-800 shadow-lg">
              <span className="text-3xl">💻</span>
            </div>
          </div>

          {/* Monthly Goal Card */}
          <div className="absolute bottom-12 left-4 z-30 w-44 rounded-xl bg-white p-4 shadow-xl shadow-emerald-900/10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Monthly Goals
              </span>

              <span>📈</span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/4 rounded-full bg-emerald-500" />
            </div>

            <p className="mt-2 text-[10px] font-semibold text-emerald-500">
              75% completed
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default CommonDashBoard






