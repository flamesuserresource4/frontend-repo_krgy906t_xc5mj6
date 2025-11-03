import { motion } from "framer-motion";
import { PlusCircle, Users, Vote, Trophy, Banknote, QrCode, TimerReset, CheckCircle2, XCircle } from "lucide-react";

const steps = [
  {
    title: "The Stake",
    icon: <PlusCircle className="w-5 h-5" />,
    color: "from-green-500/15 to-green-500/5",
    accent: "text-green-600",
    bullets: [
      "Name your habit",
      "Choose duration",
      "Set your stake"
    ],
  },
  {
    title: "Invite Jury",
    icon: <QrCode className="w-5 h-5" />,
    color: "from-blue-500/15 to-blue-500/5",
    accent: "text-blue-600",
    bullets: [
      "Share link or QR",
      "Friends join as voters",
      "They don't pay"
    ],
  },
  {
    title: "The Verdict",
    icon: <Vote className="w-5 h-5" />,
    color: "from-slate-500/10 to-slate-500/5",
    accent: "text-slate-700",
    bullets: [
      "24h voting window",
      "Majority decides",
      "Ties favor Staker"
    ],
  },
  {
    title: "Judgement",
    icon: <Trophy className="w-5 h-5" />,
    color: "from-pink-500/15 to-pink-500/5",
    accent: "text-pink-600",
    bullets: [
      "Win: refund 100%",
      "Fail: fee taken",
      "Jury splits payout"
    ],
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.2em] text-slate-500">HOW IT WORKS</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            High-trust, high-fun accountability
          </p>
          <p className="mt-3 text-slate-600">
            Clean flows and friendly animations make the serious stuff feel light. Your friends keep you honest; you keep your cash when you win.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${s.color} p-5 shadow-sm`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-white shadow-sm ${s.accent}`}>{s.icon}</div>
                <div className="font-bold text-slate-900">{s.title}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    {b}
                  </li>
                ))}
              </ul>

              {s.title === "The Verdict" && (
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex-1 px-3 py-2 rounded-full bg-green-500 text-white text-xs font-semibold shadow-sm active:scale-95 transition inline-flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> THEY DID IT
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-full bg-pink-500 text-white text-xs font-semibold shadow-sm active:scale-95 transition inline-flex items-center justify-center gap-1">
                    <XCircle className="w-4 h-4" /> THEY FAILED
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <MockCards />
      </div>
    </section>
  );
}

function MockCards() {
  return (
    <div id="features" className="mt-14 grid lg:grid-cols-3 gap-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-700">My Active Stakes</div>
          <TimerReset className="w-4 h-4 text-slate-400" />
        </div>
        <div className="mt-4 space-y-3">
          <StakeCard title="No phone after 9pm" daysLeft={7} amount={50} color="green" />
          <StakeCard title="No sugar" daysLeft={14} amount={100} color="blue" />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-700">My Jury Duty</div>
          <Users className="w-4 h-4 text-slate-400" />
        </div>
        <div className="mt-4 space-y-3">
          <JuryCard user="@sam" habit="Daily run" hoursLeft={18} />
          <JuryCard user="@jules" habit="No smoking" hoursLeft={4} />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" id="wallet">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-700">Wallet</div>
          <Banknote className="w-4 h-4 text-slate-400" />
        </div>
        <div className="mt-4">
          <div className="text-3xl font-extrabold text-slate-900">$214.00</div>
          <div className="text-xs text-slate-500 mt-1">Ready to stake or withdraw</div>
          <div className="mt-5 flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-sm active:scale-95">Add Funds</button>
            <button className="flex-1 px-4 py-2 rounded-full bg-white text-slate-900 border border-slate-200 text-sm font-semibold shadow-sm active:scale-95">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StakeCard({ title, daysLeft, amount, color = "green" }) {
  const barColor = color === "green" ? "bg-green-500" : color === "blue" ? "bg-blue-500" : "bg-slate-400";
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-slate-500 text-sm">${amount}</div>
      </div>
      <div className="mt-3">
        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
          <div className={`h-full ${barColor}`} style={{ width: `${Math.max(10, 100 - daysLeft * 3)}%` }} />
        </div>
        <div className="mt-1 text-xs text-slate-500">{daysLeft} days left</div>
      </div>
    </div>
  );
}

function JuryCard({ user, habit, hoursLeft }) {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
      <div className="text-slate-600 text-sm">{user} • {habit}</div>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-xs text-slate-500">Voting opens soon</div>
        <div className="text-slate-800 text-sm font-semibold">{hoursLeft}h</div>
      </div>
    </div>
  );
}
