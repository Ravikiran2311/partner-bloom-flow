import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, DollarSign, Building, FileText, BookOpen, Scale } from "lucide-react";

const faqCategories = [
  {
    id: "admission",
    title: "Admission Eligibility Criteria",
    icon: GraduationCap,
    color: "text-ws-1",
    bgColor: "bg-ws-1",
    items: [
      {
        heading: "Basic Academic Eligibility",
        points: [
          "Minimum aggregate percentage required (overall or PCM)?",
          "Is entrance exam mandatory? (JEE / State CET / University Entrance)",
        ],
      },
      {
        heading: "Open Schooling Acceptance",
        points: [
          "Will students from NIOS be accepted?",
          "Will students from other open boards be accepted?",
          "Any additional documentation required?",
        ],
      },
      {
        heading: "Diploma Students (Critical)",
        points: [
          "Are diploma students acceptable?",
          "Which diploma streams are acceptable? (CS / IT / ECE / Mech etc.)",
          "Minimum diploma percentage required?",
          "Will diploma students be allowed lateral entry (2nd year)?",
          "Can diploma students start from 1st year only?",
          "Is university ready to open separate cohort for lateral entry?",
        ],
      },
      {
        heading: "Subject Combination Flexibility",
        points: ["Is PCB (Physics, Chemistry, Biology) acceptable along with PCM criteria?"],
      },
      {
        heading: "Gap Year Policy",
        points: [
          "Maximum allowed gap after 12th?",
          "Are gap affidavits required?",
          "Any restriction for multiple year gaps?",
        ],
      },
      {
        heading: "Reservation & Category Norms",
        points: [
          "Will university reservation policy apply?",
          "Are management quota seats applicable?",
          "Is there any seat cap for general category?",
        ],
      },
    ],
  },
  {
    id: "fees",
    title: "Other Fees (Non-Tuition) Checklist",
    icon: DollarSign,
    color: "text-ws-3",
    bgColor: "bg-ws-3",
    items: [
      {
        heading: "Fee Components to Clarify",
        points: [
          "Application fee",
          "Registration fee",
          "Admission confirmation fee",
          "Examination fee",
          "Library fee",
          "Lab fee",
          "Cultural / Club fee",
          "Development fee",
          "Convocation fee",
          "Alumni fee",
          "Security deposit (refundable / non-refundable)",
          "Any one-time charges",
        ],
      },
      {
        heading: "Important Note",
        points: [
          "Aim to minimize 'other fee' component to reduce student financial burden",
          "Clarify timeline for fee collection",
          "Clarify installment structure (if applicable)",
        ],
      },
    ],
  },
  {
    id: "hostel",
    title: "Hostel-Related Alignment",
    icon: Building,
    color: "text-ws-4",
    bgColor: "bg-ws-4",
    items: [
      {
        heading: "Hostel Type",
        points: [
          "Is hostel in-campus or off-campus?",
          "If off-campus: Is transport provided? Transport cost included or separate?",
        ],
      },
      {
        heading: "Accommodation Types & Fees",
        points: [
          "1-sharing / 2-sharing / 3-sharing?",
          "AC / Non-AC options?",
          "Mess included or separate?",
          "Security deposit amount?",
          "Refund policy?",
        ],
      },
      {
        heading: "Capacity & Seat Alignment",
        points: [
          "Total hostel capacity available?",
          "Boys/Girls split?",
          "Does capacity match projected intake?",
          "Is hostel compulsory for 1st year?",
        ],
      },
      {
        heading: "Hostel POC",
        points: [
          "Dedicated hostel POC identified?",
          "Contact details shared?",
          "Will hostel team support student counseling calls?",
        ],
      },
    ],
  },
  {
    id: "agreement",
    title: "Agreement – Pre-Drafting Checklist",
    icon: FileText,
    color: "text-ws-2",
    bgColor: "bg-ws-2",
    items: [
      {
        heading: "University Constitution & Legal Identity",
        points: [
          "Act under which university is established (State Act / Private University Act / Deemed status)",
          "Gazette notification copy (if applicable)",
          "Certificate of incorporation / establishment proof",
        ],
      },
      {
        heading: "Trust / Society / Foundation Documents",
        points: [
          "Trust Deed / Society Registration Certificate",
          "MOA (if applicable)",
          "Registration number",
        ],
      },
      {
        heading: "PAN Card & Authorized Signatory",
        points: [
          "PAN in the name of Trust/Society/Foundation OR University entity",
          "Authorization Letter OR Board Resolution OR Governing Council Resolution",
          "Name, Designation, and authority scope of signatory",
        ],
      },
      {
        heading: "E-Signing Requirements (If Applicable)",
        points: [
          "Authorized Signatory Name & Email ID",
          "Witness Name, Email ID & Address",
        ],
      },
      {
        heading: "Key Commercial Stats (Required Before Drafting)",
        points: [
          "Number of Seats",
          "Total Fee Structure",
          "Revenue Model / Service Charges (must align with escrow)",
        ],
      },
      {
        heading: "Commonly Negotiated Clauses",
        points: [
          "Indemnification Clause — mutual? caps on liability?",
          "Termination Clause — mutual termination; student protection clause included",
          "IP Clause — IPs generally stay with NIAT, often negotiated to be balanced",
          "Place of Jurisdiction — Standard: Hyderabad, Telangana (dual jurisdiction possible)",
        ],
      },
      {
        heading: "Pre-Signing Final Verification",
        points: [
          "Establishment documents verified",
          "Trust/Society documents collected",
          "PAN copy verified",
          "Authorized signatory proof collected",
          "Key stats confirmed (seats, fee, share)",
          "Negotiated clauses aligned",
          "Escrow reference aligned",
          "E-sign details collected (if applicable)",
        ],
      },
      {
        heading: "Additional Best Practice",
        points: [
          "Program nomenclature finalized (exact program name, degree type, specializations)",
          "Faculty cost estimated before freezing service fee",
          "Commercial model revalidated after faculty estimation",
        ],
      },
    ],
  },
  {
    id: "curriculum",
    title: "Curriculum Alignment & BOS Readiness",
    icon: BookOpen,
    color: "text-ws-5",
    bgColor: "bg-ws-5",
    items: [
      {
        heading: "1. Delivery Model Finalization (First Step)",
        points: [
          "Confirm: Co-Delivery or Full Delivery",
          "2026 update: Most likely Full Delivery Model for all partnerships",
          "Impacts: Faculty deployment, cost estimation, commercial model, governance",
        ],
      },
      {
        heading: "2. Understanding BOS Cycle",
        points: [
          "Every batch requires BOS approval",
          "BOS role: Curriculum presented → Board vets → Formally approved",
          "No batch should start without BOS-approved curriculum",
        ],
      },
      {
        heading: "3. Immediate Post-Agreement Flow",
        points: [
          "Share complete module curriculum with university",
          "Seek written acknowledgment",
          "Request structured feedback — don't wait for BOS timeline",
        ],
      },
      {
        heading: "4. Input Consolidation",
        points: [
          "Evaluate university requests (subject tweaks, credit mods, topic changes)",
          "Align on mutually agreed structure",
          "Freeze draft curriculum — avoid open-ended back-and-forth near BOS",
        ],
      },
      {
        heading: "5. Subject-Level Mapping",
        points: [
          "Detailed subject mapping",
          "Match content depth & credit distribution",
          "Validate semester distribution",
          "Ensure regulatory alignment (UGC / AICTE structure)",
        ],
      },
      {
        heading: "6. Be BOS-Ready by End of March",
        points: [
          "Curriculum draft finalized",
          "Subject mapping completed",
          "Specializations frozen",
          "Delivery ownership clarified",
          "Faculty estimation completed",
          "Documentation ready for presentation",
        ],
      },
      {
        heading: "7. Specialization Finalization",
        points: [
          "Number of specializations",
          "When specialization selection happens (Year 2? Year 3?)",
          "Minimum student requirement per specialization",
          "Whether specialization appears on degree certificate",
        ],
      },
      {
        heading: "8. Faculty Deployment Dependency",
        points: [
          "Curriculum Finalization → Faculty Planning",
          "Trainer team needs: semester-wise subjects, lab intensity, credit weightage, specialization split",
          "Without finalized curriculum: faculty costing cannot be accurate",
        ],
      },
    ],
  },
  {
    id: "loan",
    title: "Loan Documentation Pointers",
    icon: Scale,
    color: "text-ws-6",
    bgColor: "bg-ws-6",
    items: [
      {
        heading: "Loan Alignment Checklist",
        points: [
          "Loan letter format finalized?",
          "Maximum amount includes: Tuition + Other fees + Hostel",
          "Installment breakup clearly mentioned?",
        ],
      },
    ],
  },
];

const FAQSection = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section id="faqs" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discussion Pointers & FAQs
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Detailed checklists and discussion points for each critical area of university partnership setup.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqCategories.map((cat) => {
            const isOpen = openCategory === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenCategory(isOpen ? null : cat.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${cat.bgColor}/10 flex items-center justify-center`}>
                      <cat.icon className={`w-4 h-4 ${cat.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{cat.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 space-y-5">
                        {cat.items.map((item, idx) => (
                          <div key={idx}>
                            <p className="text-xs font-semibold text-foreground mb-2">{item.heading}</p>
                            <div className="space-y-1.5">
                              {item.points.map((p, pi) => (
                                <div key={pi} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <div className={`w-1 h-1 rounded-full ${cat.bgColor} mt-1.5 flex-shrink-0`} />
                                  <span>{p}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
