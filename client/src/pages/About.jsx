import Navbar from "../components/Navbar";


const values = [
  {
    icon: "❤️",
    title: "People First",
    description:
      "Financial tools should work for people, not make people work for them.",
  },
  {
    icon: "💡",
    title: "Keep It Simple",
    description:
      "We turn complicated financial information into clear and useful insights.",
  },
  {
    icon: "🔒",
    title: "Privacy Matters",
    description:
      "Your financial information should always be treated with care.",
  },
  {
    icon: "📈",
    title: "Progress Over Perfection",
    description:
      "Small, consistent improvements can create meaningful financial progress.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

     <Navbar/>


     
      <section className="bg-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
              ABOUT FINMATE
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">

              Better Money Habits
              <br />

              <span className="text-emerald-500">
                Start Here.
              </span>

            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-8">
              FinMate was created to make personal finance less
              intimidating, more approachable and easier for everyone.
            </p>

          </div>


        
          <div className="mt-16 bg-linear-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12">

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <span className="text-3xl font-extrabold text-emerald-500">
                  01
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Understand
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Know where your money goes and understand
                  your spending habits.
                </p>
              </div>


              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <span className="text-3xl font-extrabold text-blue-500">
                  02
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Plan
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Create realistic budgets and set goals that
                  fit your lifestyle.
                </p>
              </div>


              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <span className="text-3xl font-extrabold text-purple-500">
                  03
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  Grow
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Build healthy financial habits and make
                  steady progress toward your goals.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


    
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-sm font-bold text-emerald-500">
                OUR MISSION
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Making financial confidence accessible to everyone.
              </h2>

              <p className="mt-6 text-slate-500 leading-8">
                We believe managing money shouldn't require a degree
                in finance.
              </p>

              <p className="mt-4 text-slate-500 leading-8">
                Everyone deserves simple tools that help them
                understand their finances, make informed decisions
                and work toward the future they want.
              </p>

            </div>


            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">

              <div className="space-y-4">

                {[
                  "Know where your money goes",
                  "Build healthier spending habits",
                  "Stay consistent with your goals",
                  "Make decisions with confidence",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 bg-slate-50 rounded-xl p-5"
                  >

                    <div className="w-10 h-10 shrink-0 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center font-bold">
                      ✓
                    </div>

                    <p className="font-semibold">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-sm font-bold text-emerald-500">
            OUR STORY
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Why we built FinMate
          </h2>

          <p className="mt-6 text-slate-500 leading-8 max-w-3xl mx-auto">
            Personal finance tools often make money management feel
            more complicated than it needs to be.
          </p>

          <p className="mt-4 text-slate-500 leading-8 max-w-3xl mx-auto">
            We wanted to create something different — a friendly
            financial companion that gives people clarity without
            overwhelming them.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="border border-slate-100 rounded-2xl p-7 text-left">

              <div className="text-3xl">
                👀
              </div>

              <h3 className="mt-4 text-lg font-bold">
                See Clearly
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Understand your complete financial picture at a glance.
              </p>

            </div>


            <div className="border border-slate-100 rounded-2xl p-7 text-left">

              <div className="text-3xl">
                🧠
              </div>

              <h3 className="mt-4 text-lg font-bold">
                Act Smarter
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Use insights to make better financial decisions.
              </p>

            </div>


            <div className="border border-slate-100 rounded-2xl p-7 text-left">

              <div className="text-3xl">
                🚀
              </div>

              <h3 className="mt-4 text-lg font-bold">
                Move Forward
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Build habits that help you reach meaningful goals.
              </p>

            </div>

          </div>

        </div>

      </section>


     
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-sm font-bold text-emerald-500">
              WHAT WE BELIEVE
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Built on simple principles
            </h2>

            <p className="mt-4 text-slate-500">
              These values guide how we build FinMate.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {values.map((value) => (

              <div
                key={value.title}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition"
              >

                <div className="text-3xl">
                  {value.icon}
                </div>

                <h3 className="mt-5 font-bold text-lg">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-6">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


   
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-slate-900 rounded-3xl px-8 py-16 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Build a better financial future.
            </h2>

            <p className="mt-4 text-slate-400">
              Start your journey with FinMate today.
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
