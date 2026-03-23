import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-[#020617] border-y border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <span className="section-label">02 / Profile</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Building <span className="text-blue-400">data-driven</span> solutions with passion.
            </h2>
            <p className="text-xl text-[#94a3b8] leading-relaxed">
              An aspiring data scientist committed to continuous learning and technical excellence.
            </p>
          </div>
          
          <motion.a
            whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="/Kumar_Gaurav_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-gradient-to-r from-blue-600 to-blue-400 border border-blue-500/30 text-white font-bold rounded-lg text-xl uppercase tracking-[0.2em] transition-all shadow-[0_8px_32px_rgba(59,130,246,0.3)] self-center lg:self-center"
          >
            <Download size={24} />
            Download Resume
          </motion.a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 card-gradient-border p-10 rounded-2xl">
            <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Career Objective
            </h3>
            <p className="text-[#e2e8f0] leading-relaxed text-lg italic">
              "Aspiring Data Scientist seeking to leverage expertise in Machine Learning, 
              Data Analytics, and AI to build impactful, data-driven solutions. 
              Committed to contributing to innovative teams and solving real-world problems with intelligent technologies."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
