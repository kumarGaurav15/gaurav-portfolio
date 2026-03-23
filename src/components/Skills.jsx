import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'C', 'Python', 'Java']
  },
  {
    title: 'Frameworks',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'PyTorch']
  },
  {
    title: 'Tools / Platforms',
    skills: ['Power BI', 'Tableau', 'Jupyter Notebook', 'Google Colab', 'AWS (SageMaker)', 'Git/GitHub', 'VS Code']
  },
  {
    title: 'Soft Skills',
    skills: ['Imaginative and Empathetic', 'Inquisitively solves problems', 'Initiates conversation with others']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#020617] border-t border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">04 / Capabilities</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-2xl">
          Technologies and tools I use to build intelligent, data-driven solutions.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-neon p-12 md:p-14 group"
            >
              <h3 className="text-white font-mono text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-500/50"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.span 
                    key={j} 
                    whileHover={{ y: -2, backgroundColor: "rgba(59, 130, 246, 0.15)", borderColor: "rgba(59, 130, 246, 0.4)", color: "#93c5fd" }}
                    className="text-[#94a3b8] text-sm bg-blue-500/5 border border-blue-500/10 px-4 py-2 rounded-xl transition-all cursor-default font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
