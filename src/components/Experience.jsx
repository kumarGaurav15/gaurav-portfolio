import { motion } from 'framer-motion';

const experienceData = [
  {
    company: 'AlgoTutor Academy',
    role: 'AI-powered Natural Language Processing (NLP)',
    subtitle: 'AI & Tech Upskilling EdTech Platform',
    period: "Jun '25 - Jul '25",
    highlights: [
      'Built and deployed NLP solutions using Generative AI, LLMs, LangChain, and RAG pipelines to enhance retrieval, reasoning, and automation capabilities',
      'Developed intelligent chatbots and AI agents by applying prompt engineering, persona design, vector databases, and multimodal integration',
      'Implemented scalable AI workflows with Docker, cloud deployment, and asynchronous processing, delivering production-ready NLP applications',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#020617] border-t border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">08 / Summer Training</span>
        
        <div className="grid gap-12 mt-16">
          {experienceData.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="card-gradient-border p-16 md:p-20 group relative overflow-hidden rounded-2xl"
            >

              <div className="flex flex-col md:flex-row gap-10 relative z-10">
                {/* Meta */}
                <div className="md:w-1/3 border-r border-blue-500/10 pr-8">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl inline-block mb-6">
                    <span className="text-blue-300 font-mono text-sm tracking-widest uppercase">{exp.period}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.company}</h4>
                  <p className="text-[#94a3b8] text-sm font-medium mb-2">{exp.subtitle}</p>
                </div>

                {/* Details */}
                <div className="md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <ul className="grid gap-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-[#94a3b8] text-lg leading-relaxed flex items-start gap-4 p-4 rounded-2xl bg-blue-500/5 border border-transparent hover:border-blue-500/20 hover:bg-blue-500/10 transition-all duration-300">
                        <span className="text-blue-400/60 mt-1 font-bold">»</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
