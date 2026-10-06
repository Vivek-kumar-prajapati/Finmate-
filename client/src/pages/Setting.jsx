

function Setting() {
  return (
    <>
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
    <p className="mt-1 text-sm text-slate-500">
      Manage your account and preferences
    </p>
  </div>

  <div className="mt-6 max-w-3xl space-y-5">

    {/* Profile */}
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-semibold">Profile Information</h2>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <input
          value="Alex Johnson"
          readOnly
          className="rounded-lg border px-4 py-3 text-sm"
        />

        <input
          value="alex@example.com"
          readOnly
          className="rounded-lg border px-4 py-3 text-sm"
        />
      </div>

      <button className="mt-5 rounded-lg bg-green-500 px-4 py-2 text-sm text-white">
        Save Changes
      </button>
    </div>

    {/* Preferences */}
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-semibold">Preferences</h2>

      <div className="mt-5 space-y-5">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium">Email Notifications</p>
            <p className="text-xs text-slate-400">
              Receive updates about your finances
            </p>
          </div>

          <div className="h-6 w-11 rounded-full bg-green-500">
            <div className="ml-5 mt-1 h-4 w-4 rounded-full bg-white" />
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium">Monthly Reports</p>
            <p className="text-xs text-slate-400">
              Get a summary of your monthly spending
            </p>
          </div>

          <div className="h-6 w-11 rounded-full bg-green-500">
            <div className="ml-5 mt-1 h-4 w-4 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>

    {/* Security */}
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="font-semibold">Security</h2>

      <button className="mt-5 rounded-lg border px-4 py-2 text-sm text-slate-700">
        Change Password
      </button>
    </div>

  </div>
</>

  )
}

export default Setting