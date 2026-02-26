import { motion } from "framer-motion";
import { Target, Users, BookOpen, ArrowDown, ExternalLink } from "lucide-react";

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

        {/* Three info cards replacing old stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {/* Training Objective */}
          <div className="glass-card rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm">🎯 Training Objective</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Structured understanding of the NIAT–University partnership lifecycle",
                "Define governance and ownership at each stage",
                "Clarify operational flow from outreach to graduation",
                "Enable team members to execute independently",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="glass-card rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-phase-2/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-phase-2" />
              </div>
              <h3 className="font-bold text-foreground text-sm">👥 Target Audience</h3>
            </div>
            <ul className="space-y-2 mb-3">
              {[
                "Zonal Managers",
                "Core Operations Team",
                "Newly joined Operations Executives",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-foreground font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-phase-2 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground italic">
              Also helps cross-functional teams understand interdependencies.
            </p>
          </div>

          {/* Lifecycle Overview */}
          <div className="glass-card rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-phase-3/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-phase-3" />
              </div>
              <h3 className="font-bold text-foreground text-sm">🏗 WorkFlow</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              The NIAT University Partnership Lifecycle is divided into <span className="font-semibold text-foreground">4 Major Phases</span> — from initial university outreach to graduation and batch closure.
            </p>
            <a
              href="https://whimsical.com/niat-university-partnership-journey-BNGCtbWn6TkyLbndVb2RtW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              onClick={(e) => { e.preventDefault(); window.open("https://whimsical.com/niat-university-partnership-journey-BNGCtbWn6TkyLbndVb2RtW", "_blank", "noopener,noreferrer"); }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Full WorkFlow on Whimsical ↗
            </a>
          </div>
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
