import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Users, CheckCircle2, XCircle, Timer } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Put your money where your mouth is.
          </motion.h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            HabitStake gamifies accountability. Stake your own money on breaking a bad
            habit, invite a Jury of friends to judge fairly, and get your cash back when
            you win.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CTAStart />
            <motion.a
              href="#flow"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold shadow-sm hover:bg-slate-50 inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Invite your Jury
            </motion.a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <FeaturePill color="text-green-600" icon={<CheckCircle2 className="w-4 h-4" />}
              label="Majority rules" sub="Ties go to the Staker" />
            <FeaturePill color="text-pink-600" icon={<XCircle className="w-4 h-4" />}
              label="Transparent fee" sub="Only on failures" />
            <FeaturePill color="text-blue-600" icon={<Timer className="w-4 h-4" />}
              label="Smooth timers" sub="Clean countdowns" />
          </div>
        </div>

        {/* Right: 3D Spline */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-slate-50">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-sky-100/30" />
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, label, sub, color }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className={`p-2 rounded-xl bg-slate-100 ${color}`}>{icon}</div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{label}</div>
        <div className="text-xs text-slate-500">{sub}</div>
      </div>
    </div>
  );
}

function CTAStart() {
  return (
    <motion.a
      href="#features"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-3 rounded-full bg-green-500 text-white font-bold shadow-[0_10px_20px_-10px_rgba(16,185,129,0.8)] hover:shadow-[0_14px_28px_-12px_rgba(16,185,129,0.9)] active:scale-95"
      style={{ transformOrigin: "center" }}
    >
      Start a Stake
    </motion.a>
  );
}
