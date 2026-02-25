import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  BookOpen,
  Landmark,
  Building2,
  Megaphone,
  CreditCard,
  ChevronDown,
} from "lucide-react";

const workstreams = [
  {
    id: 1,
    title: "Admission Criteria Alignment",
    owner: "Ops Team",
    icon: ClipboardCheck,
    colorClass: "text-ws-1",
    bgClass: "bg-ws-1",
    borderClass: "border-ws-1",
    critical: false,
    warning: "No marketing or admission communication without finalization.",
    items: [
      {
        heading: "Eligibility Criteria",
        points: ["Academic requirements", "Lateral entry rules", "Reservation norms", "Compliance criteria"],
      },
      {
        heading: "Other Fees (Non-Tuition)",
        points: ["Registration, Exam, Library, Lab, Misc fees", "Refund policy clarity", "Collection responsibility clarity"],
      },
      {
        heading: "Hostel Fees & Details",
        points: ["Fee structure & accommodation type", "Capacity & gender split", "Refund policy"],
      },
    ],
  },
  {
    id: 2,
    title: "Curriculum Alignment & BOS Setup",
    owner: "Aryabo (Mail)",
    icon: BookOpen,
    colorClass: "text-ws-2",
    bgClass: "bg-ws-2",
    borderClass: "border-ws-2",
    critical: true,
    warning: "Delay here impacts entire launch readiness. Curriculum → Faculty Hiring dependency.",
    items: [
      {
        heading: "Step 1: POC Identification",
        points: ["Dean / Academic Head nomination"],
      },
      {
        heading: "Step 2: Curriculum Alignment",
        points: ["Semester-wise subjects & credits", "Core vs electives", "Specializations", "Academic calendar integration"],
      },
      {
        heading: "Step 3: BOS Approval",
        points: ["Draft preparation", "Joint review", "BOS scheduling", "Formal approval"],
      },
    ],
  },
  {
    id: 3,
    title: "Escrow Setup (Financial Backbone)",
    owner: "Samanth",
    icon: Landmark,
    colorClass: "text-ws-3",
    bgClass: "bg-ws-3",
    borderClass: "border-ws-3",
    critical: false,
    warning: "Must be operational before major fee collection.",
    items: [
      {
        heading: "Financial Alignment",
        points: [
          "Escrow bank account setup",
          "Signatories alignment",
          "Revenue share model",
          "Collection flow",
          "Disbursement timeline",
          "Reconciliation mechanism",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Infrastructure Alignment",
    owner: "Samanth",
    icon: Building2,
    colorClass: "text-ws-4",
    bgClass: "bg-ws-4",
    borderClass: "border-ws-4",
    critical: false,
    warning: "Field visits are mandatory.",
    items: [
      {
        heading: "Model NIAT Classrooms",
        points: ["Dedicated classrooms", "AV setup & Internet", "Power backup", "Seating capacity"],
      },
      {
        heading: "NIAT 5.0 Lab Setup",
        points: ["Dedicated lab space", "Electrical readiness & Network", "Access control"],
      },
      {
        heading: "Hostel Infrastructure",
        points: ["Capacity vs seat commitment", "Fee alignment", "Inspection visit (if required)"],
      },
    ],
  },
  {
    id: 5,
    title: "Marketing Activation",
    owner: "Surendranath",
    icon: Megaphone,
    colorClass: "text-ws-5",
    bgClass: "bg-ws-5",
    borderClass: "border-ws-5",
    critical: false,
    warning: "Must align with finalized curriculum & seat numbers.",
    items: [
      {
        heading: "Digital Presence",
        points: [
          "Partnership live on NIAT website",
          "Program live on university website",
        ],
      },
      {
        heading: "Campus Tour & Video",
        points: [
          "On-campus visit & shoot",
          "Key stakeholder interviews",
          "Edit & publish on YouTube",
          "Social media amplification",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Loan Documentation Alignment",
    owner: "Zonal Managers",
    icon: CreditCard,
    colorClass: "text-ws-6",
    bgClass: "bg-ws-6",
    borderClass: "border-ws-6",
    critical: false,
    warning: "Prevents loan-related admission delays.",
    items: [
      {
        heading: "Loan Alignment",
        points: [
          "Loan letter format finalization",
          "Max sanctioned amount (Tuition + Other + Hostel)",
          "Installment structure",
          "Bank compliance wording",
        ],
      },
    ],
  },
];

const WorkstreamSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="workstreams" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parallel Workstreams
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Six critical tracks that run simultaneously after activation (Day 1 onwards).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workstreams.map((ws) => {
            const isOpen = expanded === ws.id;
            return (
              <motion.div
                key={ws.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass-card rounded-xl overflow-hidden cursor-pointer transition-all hover:border-opacity-50 ${
                  isOpen ? `border ${ws.borderClass} border-opacity-30` : ""
                }`}
                onClick={() => setExpanded(isOpen ? null : ws.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${ws.bgClass} bg-opacity-10 flex items-center justify-center`}>
                        <ws.icon className={`w-4 h-4 ${ws.colorClass}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm leading-tight">{ws.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Owner: {ws.owner}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  {ws.critical && (
                    <div className="text-xs px-2 py-1 rounded bg-destructive/10 text-destructive font-medium mb-3 inline-block">
                      ⚠ Highly Critical
                    </div>
                  )}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-4 pt-2">
                          {ws.items.map((item, idx) => (
                            <div key={idx}>
                              <p className="text-xs font-semibold text-foreground mb-1.5">{item.heading}</p>
                              <div className="space-y-1">
                                {item.points.map((p, pi) => (
                                  <div key={pi} className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <div className={`w-1 h-1 rounded-full ${ws.bgClass} mt-1.5 flex-shrink-0`} />
                                    <span>{p}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className={`mt-4 text-xs ${ws.colorClass} font-medium p-2 rounded-md bg-secondary`}>
                          ⚠ {ws.warning}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkstreamSection;
