import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    phase: "Pre-Onboarding",
    owner: "Zonal Manager",
    zmRole: "Full Ownership",
    opsRole: "Not Involved",
    color: "phase-1",
  },
  {
    phase: "Post-Onboarding",
    owner: "Zonal Manager",
    zmRole: "Full Ownership",
    opsRole: "Not Involved",
    color: "phase-2",
  },
  {
    phase: "Post-Commencement → Graduation",
    owner: "Program Manager / COS",
    zmRole: "Strategic Only",
    opsRole: "Full Ownership",
    color: "phase-3",
  },
  {
    phase: "Graduation",
    owner: "Program Manager / COS",
    zmRole: "Oversight",
    opsRole: "Full Ownership",
    color: "phase-4",
  },
];

const dotColor: Record<string, string> = {
  "phase-1": "bg-phase-1",
  "phase-2": "bg-phase-2",
  "phase-3": "bg-phase-3",
  "phase-4": "bg-phase-4",
};

const GovernanceSection = () => {
  return (
    <section id="governance" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Governance Summary
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Clear ownership and role transitions at each phase of the lifecycle.
          </p>
        </motion.div>

        {/* Transition callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm mb-1">Governance Transition at Orientation</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Formal handover from Zonal Manager to Program Manager / COS. Documentation transferred. 
              Post this: Zonal Manager → Strategic oversight only. Program Ops → Full operational ownership.
            </p>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-secondary/50 border-b border-border">
            {["Phase", "Owner", "Zonal Manager Role", "Program Ops Role"].map((h) => (
              <div key={h} className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {h}
              </div>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${dotColor[row.color]}`} />
                <span className="text-sm font-medium text-foreground">{row.phase}</span>
              </div>
              <div className="text-sm text-secondary-foreground">{row.owner}</div>
              <div className="text-sm text-secondary-foreground">{row.zmRole}</div>
              <div className="text-sm text-secondary-foreground">{row.opsRole}</div>
            </div>
          ))}
        </motion.div>

        {/* Lifecycle continuation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card rounded-xl p-6"
        >
          <h3 className="font-semibold text-foreground text-sm mb-3">Lifecycle Continuation — Program Ops Manages:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Academic Delivery", "Exams", "Attendance", "Results", "Escalations", "Compliance", "Semester Progression", "Graduation"].map((item) => (
              <div key={item} className="text-xs text-muted-foreground flex items-center gap-2 p-2 rounded-md bg-secondary">
                <div className="w-1 h-1 rounded-full bg-phase-3" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">Lifecycle ends at degree award.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceSection;
