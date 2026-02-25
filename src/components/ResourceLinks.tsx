import { motion } from "framer-motion";
import { ExternalLink, FileText, Table2, FolderOpen, ClipboardList } from "lucide-react";

const resources = [
  {
    title: "External Kickoff Mail Template",
    desc: "Template for university coordination kickoff",
    icon: FileText,
    url: "https://docs.google.com/document/d/1k5TYyLNGOOkWudBCYov76vkM50m4gFzH2SZN5zG-mTU/edit?tab=t.upj6ry9ht2ud",
  },
  {
    title: "Internal Intimation Mail Template",
    desc: "Template for internal department activation",
    icon: FileText,
    url: "https://docs.google.com/document/d/1k5TYyLNGOOkWudBCYov76vkM50m4gFzH2SZN5zG-mTU/edit?tab=t.upj6ry9ht2ud",
  },
  {
    title: "Admission Criteria Workbook",
    desc: "Workbook template with sample data",
    icon: Table2,
    url: "https://docs.google.com/spreadsheets/d/1wn8d33RSzmW1RJ82XL_UCkpSBgblPDuWYdvZNX0-U2Y/edit?gid=903760385#gid=903760385",
  },
  {
    title: "Curriculum Mail Template",
    desc: "BOS alignment mail template",
    icon: FileText,
    url: "https://docs.google.com/document/d/1k5TYyLNGOOkWudBCYov76vkM50m4gFzH2SZN5zG-mTU/edit?tab=t.0",
  },
  {
    title: "Escrow Checklist",
    desc: "PG checklist for escrow setup",
    icon: ClipboardList,
    url: "https://docs.google.com/document/d/1SUPA8z6m6E1PcGd_mpPkFP_G62HkgIl28DF-p0gjzXs/edit?usp=sharing",
  },
  {
    title: "Infra Playbook",
    desc: "Overall infrastructure playbook",
    icon: FolderOpen,
    url: "https://drive.google.com/file/d/1kx9ehwe2dRLHFc6o2B9q81dxhPvzUq1z/view",
  },
  {
    title: "5.0 Lab Design",
    desc: "NIAT 5.0 Lab design document",
    icon: FolderOpen,
    url: "https://drive.google.com/file/d/1OhhTMYsB6EiMAStv5nRSbC0Yz96HMp6o/view",
  },
  {
    title: "AC Infra Playbook",
    desc: "AC infrastructure alignment playbook",
    icon: FolderOpen,
    url: "https://drive.google.com/file/d/1JvZ2IGvjTtt9UMpDZiQK66lJE3g8-IHO/view",
  },
  {
    title: "Loan Documentation Form",
    desc: "Microsoft Forms link for loan alignment",
    icon: ClipboardList,
    url: "https://forms.microsoft.com/r/7mWbyZ6ku9",
  },
  {
    title: "Progress Tracker",
    desc: "NIAT <> University progress status tracker",
    icon: Table2,
    url: "https://docs.google.com/spreadsheets/d/1FDn5p0UmTWvWa3pn9tmVDjjHOpTLxI3jqCT1fPrd_eU/edit?gid=580862037#gid=580862037",
  },
];

const ResourceLinks = () => {
  return (
    <section id="resources" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Templates & Resources
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Quick access to all templates, playbooks, checklists, and trackers referenced in this manual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {resources.map((res, i) => (
            <motion.a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass-card rounded-xl p-4 flex items-start gap-3 group hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <res.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground truncate">{res.title}</h3>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{res.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceLinks;
