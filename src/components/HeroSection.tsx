import { motion } from "framer-motion";
import { Users, BookOpen, Target, ArrowDown } from "lucide-react";

const stats = [
  { icon: Target, label: "Training Objective", desc: "Structured lifecycle understanding" },
  { icon: Users, label: "For Teams", desc: "Zonal Managers, Ops Team, Executives" },
  { icon: BookOpen, label: "4 Phases", desc: "From outreach to graduation" },
];

const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "hsl(var(--phase-4) / 0.05)" }} />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            Operations Training Manual
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">University Partnership</span>
            <br />
            <span className="text-gradient-primary">Lifecycle Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            A complete operational guide for the NIAT–University partnership lifecycle — 
            from initial outreach to graduation. Everything your team needs to execute independently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-xl p-5 text-left">
              <s.icon className="w-5 h-5 text-primary mb-3" />
              <div className="font-semibold text-foreground text-sm mb-1">{s.label}</div>
              <div className="text-muted-foreground text-sm">{s.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => document.getElementById("phases")?.scrollIntoView({ behavior: "smooth" })}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
