import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

export default function Navigation() {
  const location = useLocation();

  const linkBase =
    "flex items-center gap-2 px-4 py-2 rounded-md text-sm transition";
  const active = "bg-violet-500 text-white";
  const inactive = "text-slate-200 hover:bg-slate-800";

  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <div className="text-lg font-semibold text-slate-50">
          Mini<span className="text-violet-400">Project</span>
        </div>
        <div className="flex gap-2">
          <Link
            to="/"
            className={`${linkBase} ${
              location.pathname === "/" ? active : inactive
            }`}
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/profile"
            className={`${linkBase} ${
              location.pathname === "/profile" ? active : inactive
            }`}
          >
            <FaUser />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
