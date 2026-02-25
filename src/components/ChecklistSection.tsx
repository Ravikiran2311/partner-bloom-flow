import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

const items = [
  "Admission criteria finalized",
  "Curriculum approved via BOS",
  "Escrow operational",
  "Classrooms ready",
  "NIAT 5.0 lab ready",
  "Hostel aligned with intake",
  "Loan format finalized",
  "Minimum batch strength achieved",
  "Orientation date finalized",
];

const ChecklistSection = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const progress = Math.round((checked.size / items.length) * 100);

  return (
    <section id="checklist" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pre-Commencement Checklist
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            All items must be completed before Orientation can be conducted. Click to track progress interactively.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Readiness</span>
            <span className={`font-semibold ${progress === 100 ? "text-phase-3" : "text-foreground"}`}>
              {progress}%
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              style={{ background: progress === 100 ? "hsl(var(--phase-3))" : undefined }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 space-y-1">
          {items.map((item, i) => {
            const done = checked.has(i);
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onClick={() => toggle(i)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  done ? "bg-phase-3/5" : "hover:bg-secondary"
                }`}
              >
                {done ? (
                  <CheckCircle2 className="w-5 h-5 text-phase-3 flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
                <span className={`text-sm ${done ? "text-phase-3 line-through" : "text-foreground"}`}>
                  {item}
                </span>
              </motion.button>
            );
          })}
        </div>

        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 text-center p-4 rounded-xl bg-phase-3/10 border border-phase-3/20"
          >
            <p className="text-phase-3 font-semibold text-sm">
              ✅ All clear — Orientation can be conducted!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ChecklistSection;
