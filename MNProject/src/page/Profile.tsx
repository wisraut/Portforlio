export default function Profile() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="rounded-lg bg-slate-900/40 border border-slate-800 p-6 space-y-4">
        <div>
          <label className="block text-sm mb-1 text-slate-300">
            ชื่อ - นามสกุล
          </label>
          <input
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100"
            placeholder="เช่น Folk Computer"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-300">อีเมล</label>
          <input
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100"
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-300">
            เกี่ยวกับฉัน
          </label>
          <textarea
            rows={4}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-slate-100"
            placeholder="นักศึกษาวิศวกรรมคอมพิวเตอร์ สนใจ React, TypeScript, DB ..."
          />
        </div>

        <button className="px-4 py-2 rounded-md bg-violet-500 text-white text-sm">
          Save
        </button>
      </div>
    </div>
  );
}
