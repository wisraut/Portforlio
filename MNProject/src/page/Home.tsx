export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 text-slate-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mini Project</h1>
      <p className="mb-6 text-slate-300">
        โปรเจกต์ตัวอย่างสำหรับวิชา CE306 (React + Tailwind + Radix UI + Router)
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-slate-900/40 border border-slate-800 p-4">
          <h2 className="font-semibold mb-2">React Router</h2>
          <p className="text-sm text-slate-400">
            ตัวอย่างการสร้างหลายหน้า และนำทางด้วย &lt;Link /&gt;
          </p>
        </div>
        <div className="rounded-lg bg-slate-900/40 border border-slate-800 p-4">
          <h2 className="font-semibold mb-2">Tailwind CSS</h2>
          <p className="text-sm text-slate-400">
            ใช้ class utility จัด layout และสีได้เร็ว
          </p>
        </div>
        <div className="rounded-lg bg-slate-900/40 border border-slate-800 p-4">
          <h2 className="font-semibold mb-2">Radix UI</h2>
          <p className="text-sm text-slate-400">
            เอาไว้เพิ่ม component ที่เข้าถึงได้ง่าย เช่น dialog, menu
          </p>
        </div>
      </div>
    </div>
  );
}
