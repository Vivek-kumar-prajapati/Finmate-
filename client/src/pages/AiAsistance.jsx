

function AiAsistance() {
  return (
   <>
  <div>
    <h1 className="text-2xl font-bold text-slate-900">AI Assistant</h1>
    <p className="mt-1 text-sm text-slate-500">
      Your personal financial assistant
    </p>
  </div>

  <div className="mt-6 max-w-4xl rounded-xl bg-white p-6 shadow-sm">

    {/* AI message */}
    <div className="flex gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✦
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-medium">FinMate AI</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Hi! I can help you understand your spending, create budgets,
          track your goals, and make better financial decisions.
        </p>
      </div>
    </div>

    {/* Suggestions */}
    <div className="mt-8 grid grid-cols-2 gap-3">
      {[
        "How can I save more money?",
        "Analyze my spending",
        "Create a monthly budget",
        "How am I doing this month?",
      ].map((text) => (
        <button className="rounded-lg border p-4 text-left text-sm text-slate-600 hover:border-green-400 hover:text-green-600">
          {text}
        </button>
      ))}
    </div>

    {/* Input */}
    <div className="mt-8 flex gap-3">
      <input
        placeholder="Ask anything about your finances..."
        className="flex-1 rounded-lg border px-4 py-3 text-sm outline-none focus:border-green-500"
      />

      <button className="rounded-lg bg-green-500 px-5 text-white">
        Send
      </button>
    </div>
  </div>
</>

  )
}

export default AiAsistance