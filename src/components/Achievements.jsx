import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: 'Solved 200+ Questions',
    description: 'Solved over 200+ questions across LeetCode, GeeksForGeeks, and TakeUForward, demonstrating strong algorithmic and problem-solving skills.',
    date: "Nov '25",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#0a0f1e] border-t border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">07 / Achievements</span>
        
        {/* Massive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Problems Solved', value: '200+' },
            { label: 'Projects Built', value: '3+' },
            { label: 'Certifications', value: '4+' },
            { label: 'Platforms', value: '3+' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-neon p-10 md:p-12 text-center flex flex-col items-center justify-center hover:border-blue-500/40 transition-all duration-500"
            >
              <div className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <p className="text-[#94a3b8] font-mono text-xs uppercase tracking-[0.25em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid md:grid-cols-2 gap-12">
          {achievementsData.map((ach, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="card-frosted p-12 md:p-16 group"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <span className="text-[#475569] font-mono text-sm uppercase tracking-widest">{ach.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                {ach.title}
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-lg">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
