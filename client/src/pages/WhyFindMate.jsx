import Navbar from "../components/Navbar";


const benefits = [
  {
    icon: "💡",
    bg: "bg-emerald-50",
    title: "Simple & Powerful",
    description:
      "No complicated spreadsheets or confusing financial software. FinMate gives you powerful tools through a clean and intuitive interface.",
  },
  {
    icon: "🤖",
    bg: "bg-purple-50",
    title: "AI-Powered Insights",
    description:
      "Get personalized suggestions based on your financial activity and understand your money better.",
  },
  {
    icon: "🔒",
    bg: "bg-blue-50",
    title: "Privacy First",
    description:
      "Your financial information is personal. FinMate is designed with privacy and security at its core.",
  },
  {
    icon: "🎯",
    bg: "bg-orange-50",
    title: "Built Around Your Goals",
    description:
      "Whether you're saving for a bike, emergency fund or home, FinMate keeps your goals visible.",
  },
];

 function WhyFinMate() {
  return (
    <div className=" bg-slate-50 text-slate-900">

    
    <Navbar/>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                WHY FINMATE
              </span>

              <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
                Your Money.
                <br />
                Your Goals.
                <br />
                <span className="text-emerald-500">
                  Your Future.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-500 leading-8">
                FinMate makes personal finance simple, visual and easy
                to understand so you can make better decisions every day.
              </p>

              <a
                href="/signup"
                className="inline-block mt-8 px-7 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
              >
                Start Your Journey
              </a>

            </div>

            {/* Dashboard Preview */}
            <div className="bg-linear-to-br from-emerald-50 to-blue-50 rounded-3xl p-8">

              <div className="bg-white rounded-2xl shadow-xl p-6">

                <div className="flex justify-between">

                  <div>
                    <p className="text-xs text-slate-400">
                      Total Balance
                    </p>

                    <p className="text-3xl font-bold">
                      ₹52,450
                    </p>
                  </div>

                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
                    📈
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">

                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-400">
                      Income
                    </p>

                    <p className="mt-1 font-bold text-emerald-500">
                      ₹75,000
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-xs text-slate-400">
                      Expenses
                    </p>

                    <p className="mt-1 font-bold text-red-500">
                      ₹22,550
                    </p>
                  </div>

                </div>

                <div className="mt-5 bg-slate-50 rounded-xl p-5">

                  <p className="text-sm font-semibold">
                    Monthly Spending
                  </p>

                  <div className="flex items-end gap-3 h-32 mt-5">

                    {[50, 75, 60, 90, 65, 100].map((height, index) => (
                      <div
                        key={index}
                        style={{ height: `${height}%` }}
                        className="flex-1 bg-emerald-400 rounded-t"
                      />
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mx-auto text-center mb-14">

            <p className="text-sm font-semibold text-emerald-500">
              THE FINMATE DIFFERENCE
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Why choose FinMate?
            </h2>

            <p className="mt-4 text-slate-500">
              A smarter and simpler approach to managing your finances.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-lg transition"
              >

                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-sm font-semibold text-emerald-500">
              A BETTER WAY
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Financial management made simple
            </h2>

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">

            <div className="grid grid-cols-3 bg-slate-50 p-5 font-bold">
              <div>What matters</div>
              <div className="text-center">Without FinMate</div>
              <div className="text-center text-emerald-600">
                With FinMate
              </div>
            </div>

            {[
              ["Track spending", "Scattered", "One dashboard"],
              ["Create budgets", "Manual", "Smart budgets"],
              ["Understand trends", "Difficult", "Visual analytics"],
              ["Set goals", "Easy to forget", "Always visible"],
              ["Financial guidance", "Search everywhere", "AI assistant"],
            ].map(([name, oldValue, newValue]) => (
              <div
                key={name}
                className="grid grid-cols-3 p-5 border-t border-slate-100 text-sm"
              >
                <div className="font-semibold">
                  {name}
                </div>

                <div className="text-center text-slate-400">
                  {oldValue}
                </div>

                <div className="text-center font-semibold text-emerald-600">
                  ✓ {newValue}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-slate-900 rounded-3xl px-8 py-16 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your better financial future starts today.
            </h2>

            <p className="mt-4 text-slate-400">
              Take the first step with FinMate.
            </p>

            <a
              href="/signup"
              className="inline-block mt-8 px-7 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold"
            >
              Get Started Free
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default WhyFinMate
