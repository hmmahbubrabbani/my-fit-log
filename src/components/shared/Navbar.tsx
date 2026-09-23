"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FitContext } from "@/context/FitContext";

const Navbar = () => {
  const pathname = usePathname();
  const context = useContext(FitContext);

  if (!context) return null;
  const { todaysPlan, savedList } = context;

  const isActive = (path: string) => pathname === path;

  return (
    <div className="navbar bg-base-100 shadow-xl container mx-auto px-4 py-5 border-b border-slate-700">
     
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-wider uppercase">
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-white">FITLOG</span>
        </Link>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          <li>
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-[#ccff00] font-bold bg-transparent"
                  : "hover:bg-base-200"
              }`}
            >
              Workout
            </Link>
          </li>
          <li>
            <Link
              href="/my-plan"
              className={`${
                isActive("/my-plan")
                  ? "text-[#ccff00] font-bold bg-transparent"
                  : "hover:bg-base-200"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      
      <div className="navbar-end gap-3">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-base-300 font-semibold text-sm hover:bg-base-200 transition-all text-white"
        >
          <span>Plan:</span>
          <span className="badge bg-[#ccff00] text-black border-none badge-sm font-bold">
            {todaysPlan.length}
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-base-300 font-semibold text-sm hover:bg-base-200 transition-all text-white"
        >
          <span>Saved:</span>
          <span className="badge badge-outline badge-sm font-bold text-white">
            {savedList.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;