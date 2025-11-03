import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} HabitStake. Accountability that pays off.
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Github className="w-4 h-4" /> Star us
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
