import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const ActivationSteps = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-phase-2/20 bg-phase-2/5 text-phase-2 text-xs font-semibold mb-4">
          Post Agreement Signing
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Official Activation (Day 0–1)
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm">
          Two critical mails must go out immediately after agreement signing to activate both external and internal workstreams.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 border-l-2 border-l-phase-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-phase-2/10 flex items-center justify-center">
              <Send className="w-5 h-5 text-phase-2" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm">1️⃣ External Kickoff Mail</h3>
              <p className="text-xs text-muted-foreground">To University — Sent by Aryabo</p>
              <a href="https://docs.google.com/document/d/1k5TYyLNGOOkWudBCYov76vkM50m4gFzH2SZN5zG-mTU/edit?tab=t.upj6ry9ht2ud" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">View Template ↗</a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Establish structured coordination with the university.</p>
          <div className="text-xs text-secondary-foreground space-y-1.5">
            <p className="font-semibold text-foreground mb-2">Request POCs for:</p>
            {["Admissions", "Academics / Curriculum", "Finance", "Hostel", "Infrastructure", "Administration"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-phase-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 border-l-2 border-l-primary"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm">2️⃣ Internal Intimation Mail</h3>
              <p className="text-xs text-muted-foreground">Simultaneous — Sent by Ravi</p>
              <a href="https://docs.google.com/document/d/1k5TYyLNGOOkWudBCYov76vkM50m4gFzH2SZN5zG-mTU/edit?tab=t.upj6ry9ht2ud" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">View Template ↗</a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Activate internal departments with university details.</p>
          <div className="text-xs text-secondary-foreground space-y-1.5">
            <p className="font-semibold text-foreground mb-2">Must include & loop in:</p>
            {[
              "Marketing (Surendra)",
              "Escrow & Infra Lead (Samanth)",
              "Hostel, Curriculum, Admissions HODs",
              "Trainer / Faculty Team",
              "Finance & Ops Leadership",
              "Branding and Marketing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ActivationSteps;
