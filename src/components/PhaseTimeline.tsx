import { motion } from "framer-motion";
import { FileText, Settings, Rocket, GraduationCap } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Pre-Onboarding",
    subtitle: "University Outreach → Agreement Signing",
    owner: "Zonal Manager",
    supporting: "Legal, Finance, Central Ops, Leadership",
    objective: "Convert a prospective university into a signed partner.",
    color: "phase-1",
    glowClass: "phase-glow-1",
    icon: FileText,
    steps: [
      "University Outreach",
      "Discussion & Feasibility Alignment",
      "Agreement Drafting & Negotiation",
      "Agreement Signing",
    ],
    endNote: "Phase ends at Agreement Execution",
  },
  {
    number: 2,
    title: "Post-Onboarding",
    subtitle: "Agreement Signing → Class Commencement",
    owner: "Zonal Manager (Exclusive)",
    supporting: "Central University Ops (Supervisory)",
    objective: "Ensure 100% operational, academic, and financial readiness before first batch launch.",
    color: "phase-2",
    glowClass: "phase-glow-2",
    icon: Settings,
    steps: [
      "Official Activation (Kickoff Mails)",
      "Parallel Workstreams Launch",
      "Pre-Commencement Checklist",
      "Orientation Conducted",
    ],
    endNote: "Zonal Manager holds complete accountability",
  },
  {
    number: 3,
    title: "Program Lifecycle",
    subtitle: "Class Commencement → Graduation (4 Years)",
    owner: "Program Manager / COS",
    supporting: "Zonal Manager (Strategic only)",
    objective: "Full operational management of academic delivery, exams, attendance, results, and compliance.",
    color: "phase-3",
    glowClass: "phase-glow-3",
    icon: Rocket,
    steps: [
      "Academic Delivery",
      "Semester Progression",
      "Exams & Results",
      "Escalations & Compliance",
    ],
    endNote: "Assigned PM or COS per university",
  },
  {
    number: 4,
    title: "Graduation & Closure",
    subtitle: "Degree Award → Lifecycle End",
    owner: "Program Manager / COS",
    supporting: "Zonal Manager (Oversight)",
    objective: "Lifecycle ends for a batch when a degree is awarded.",
    color: "phase-4",
    glowClass: "phase-glow-4",
    icon: GraduationCap,
    steps: [
      "Final Semester Completion",
      "Results Compilation",
      "Degree Award Ceremony",
      "Batch Closure & Documentation",
    ],
    endNote: "Lifecycle formally ends",
  },
];

const colorMap: Record<string, string> = {
  "phase-1": "text-phase-1 border-phase-1",
  "phase-2": "text-phase-2 border-phase-2",
  "phase-3": "text-phase-3 border-phase-3",
  "phase-4": "text-phase-4 border-phase-4",
};

const bgMap: Record<string, string> = {
  "phase-1": "bg-phase-1",
  "phase-2": "bg-phase-2",
  "phase-3": "bg-phase-3",
  "phase-4": "bg-phase-4",
};

const PhaseTimeline = () => {
  return (
    <section id="phases" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partnership Lifecycle Phases
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Four major phases from initial university outreach to graduation and batch closure.
          </p>
        </motion.div>

        {/* Horizontal flow indicator */}
        <div className="hidden lg:flex items-center justify-between mb-12 px-8">
          {phases.map((p, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full ${bgMap[p.color]} flex items-center justify-center text-sm font-bold text-primary-foreground`}>
                {p.number}
              </div>
              {i < phases.length - 1 && (
                <div className="flex-1 h-px bg-border mx-3 relative">
                  <div className={`absolute left-0 top-0 h-full ${bgMap[p.color]} opacity-40`} style={{ width: "100%" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 ${phase.glowClass}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${bgMap[phase.color]} bg-opacity-10 flex items-center justify-center`}>
                  <phase.icon className={`w-6 h-6 ${colorMap[phase.color].split(" ")[0]}`} />
                </div>
                <div className="flex-1">
                  <div className={`text-xs font-semibold uppercase tracking-wider ${colorMap[phase.color].split(" ")[0]} mb-1`}>
                    Phase {phase.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-secondary-foreground mb-4 leading-relaxed">{phase.objective}</p>

              <div className="space-y-1.5 mb-4">
                {phase.steps.map((step, si) => (
                  <div key={si} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${bgMap[phase.color]}`} />
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                  👤 {phase.owner}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                  🤝 {phase.supporting}
                </span>
              </div>

              <div className={`text-xs ${colorMap[phase.color].split(" ")[0]} font-medium`}>
                ✅ {phase.endNote}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhaseTimeline;
