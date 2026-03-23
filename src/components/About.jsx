import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VariableProximity from './animations/VariableProximity';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutText = "I specialize in Data Science, Machine Learning, and AI-powered solutions. I work with Python, Power BI, Tableau, and modern ML frameworks to build predictive models, interactive dashboards, and intelligent NLP applications. I'm imaginative, empathetic, and love solving complex problems with data-driven approaches.";

  return (
    <section id="about" className="section-padding bg-[#0a0f1e]">
      <div className="container-custom max-w-4xl mx-auto">
        <span className="section-label">01 / About</span>
        
        <div ref={ref}>
          {/* Main big text with Variable Proximity effect */}
          <div className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-[#94a3b8] mb-12">
            <VariableProximity 
              text={aboutText} 
              className="inline-block"
            />
          </div>

          {/* Additional details - Frosted Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-10 pt-16"
          >
            <div className="card-frosted p-12 md:p-16">
              <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"></span>
                Core Focus
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-lg">
                Building ML models, data pipelines, interactive dashboards, and deploying AI-powered NLP solutions for real-world impact.
              </p>
            </div>
            <div className="card-frosted p-12 md:p-16">
              <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"></span>
                Current Status
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-lg">
                Pursuing B.Tech in CSE at Lovely Professional University & B.Sc in Data Science at IIT Madras. Exploring Gen AI and cloud technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
