import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import PhaseTimeline from "@/components/PhaseTimeline";
import ActivationSteps from "@/components/ActivationSteps";
import WorkstreamSection from "@/components/WorkstreamSection";
import ChecklistSection from "@/components/ChecklistSection";
import FAQSection from "@/components/FAQSection";
import ResourceLinks from "@/components/ResourceLinks";
import GovernanceSection from "@/components/GovernanceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <HeroSection />
      <PhaseTimeline />
      <ActivationSteps />
      <WorkstreamSection />
      <ChecklistSection />
      <FAQSection />
      <ResourceLinks />
      <GovernanceSection />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
              N
            </div>
            <span className="text-sm text-muted-foreground">NIAT University Operations</span>
          </div>
          <a
            href="https://docs.google.com/spreadsheets/d/1FDn5p0UmTWvWa3pn9tmVDjjHOpTLxI3jqCT1fPrd_eU/edit?gid=580862037#gid=580862037"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline"
          >
            Open Progress Tracker ↗
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
