import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-base-100 text-neutral-content py-8 mt-20 border-t border-slate-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
       
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            className="object-contain" />
          <span className="text-xl font-black tracking-wider uppercase text-primary">
            FIT<span className="text-white">LOG</span>
          </span>
        </div>

        <p className="text-sm font-medium opacity-80 text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}