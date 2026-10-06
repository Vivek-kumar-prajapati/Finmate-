import Navbar from "../components/Navbar";


const features = [
  {
    icon: "📊",
    bg: "bg-emerald-50",
    title: "Smart Dashboard",
    description:
      "Get a complete overview of your balance, income, expenses and savings in one simple dashboard.",
  },
  {
    icon: "💳",
    bg: "bg-blue-50",
    title: "Transactions",
    description:
      "Easily record and organize your income and expenses with categories and transaction history.",
  },
  {
    icon: "💰",
    bg: "bg-purple-50",
    title: "Smart Budgets",
    description:
      "Create spending limits and know exactly how much you can spend in every category.",
  },
  {
    icon: "🎯",
    bg: "bg-orange-50",
    title: "Financial Goals",
    description:
      "Set savings goals and track your progress toward the things that matter most.",
  },
  {
    icon: "📈",
    bg: "bg-cyan-50",
    title: "Analytics",
    description:
      "Visualize your spending patterns and discover where your money is going.",
  },
  {
    icon: "🤖",
    bg: "bg-emerald-50",
    title: "AI Financial Assistant",
    description:
      "Get personalized financial insights and helpful answers based on your spending habits.",
  },
];

 function Features() {
  return (
    <div className=" bg-slate-50 text-slate-900">

      <Navbar/>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
              FINMATE FEATURES
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Everything You Need to{" "}
              <span className="text-emerald-500">
                Master Your Money
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-8">
              Powerful yet simple tools that help you track spending,
              build budgets, achieve goals and understand your finances.
            </p>

            <div className="mt-8 flex justify-center gap-4">

              <a
                href="/signup"
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition"
              >
                Get Started Free
              </a>

              <a
                href="#features"
                className="px-6 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold hover:border-emerald-400 transition"
              >
                Explore Features
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-emerald-500">
              POWERFUL TOOLS
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Your finances, simplified
            </h2>

            <p className="mt-4 text-slate-500">
              Everything you need to stay in control of your financial life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center text-2xl`}
                >
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-500 leading-7">
                  {feature.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-emerald-500">
                  Learn more →
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
              Ready to take control?
            </h2>

            <p className="mt-4 text-slate-400">
              Start managing your money smarter with FinMate.
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

export default Features