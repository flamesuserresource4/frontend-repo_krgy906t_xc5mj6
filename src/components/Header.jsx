import { Rocket, Wallet, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-2 rounded-full bg-green-500/10 text-green-600">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-extrabold tracking-wider text-slate-800 text-lg">
            HABITSTAKE
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#flow" className="hover:text-slate-900 transition">How it works</a>
          <a href="#wallet" className="hover:text-slate-900 transition">Wallet</a>
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-sm hover:shadow-md active:scale-95 transition inline-flex items-center gap-2"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Rocket className="w-4 h-4" />
            Launch App
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-full bg-white text-slate-900 border border-slate-200 text-sm font-semibold shadow-sm hover:bg-slate-50 active:scale-95 transition inline-flex items-center gap-2"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Wallet className="w-4 h-4" />
            Wallet
          </motion.button>
        </div>
      </div>
    </header>
  );
}
